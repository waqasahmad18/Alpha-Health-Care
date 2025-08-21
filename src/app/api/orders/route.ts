import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for orders (in production, this would be a database)
// For development, we'll use a simple in-memory array that persists during the session
let orders: any[] = [];
let orderCounter = 1;

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    // Generate unique order ID
    const orderId = `ORD-${Date.now()}-${orderCounter++}`;
    
    // Create order object
    const order = {
      _id: orderId,
      ...orderData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Add to orders array
    orders.push(order);
    
    return NextResponse.json({ 
      success: true, 
      orderId: orderId,
      message: 'Order created successfully' 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    return NextResponse.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' }, 
      { status: 500 }
    );
  }
} 