import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Temporary hardcoded users for testing (until MongoDB is connected)
        const testUsers = [
          {
            id: '1',
            email: 'admin@alphahealth.com',
            password: 'admin123',
            name: 'Admin User',
            role: 'admin'
          },
          {
            id: '2',
            email: 'user@alphahealth.com',
            password: 'user123',
            name: 'John Doe',
            role: 'user'
          }
        ];

        const user = testUsers.find(u => 
          u.email === credentials.email && u.password === credentials.password
        );

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        }

        // If hardcoded login fails, try MongoDB (if available)
        try {
          await connectDB();
          
          const dbUser = await User.findOne({ email: credentials.email });
          
          if (dbUser) {
            const isPasswordValid = await bcrypt.compare(credentials.password, dbUser.password);
            
            if (isPasswordValid) {
              return {
                id: dbUser._id.toString(),
                email: dbUser.email,
                name: dbUser.name,
                role: dbUser.role,
              };
            }
          }
        } catch (error) {
          console.error('MongoDB auth error (using fallback):', error);
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };