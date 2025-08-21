import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for orders (in production, this would be a database)
let orders: any[] = [];

// This function gets the orders from the main orders route
async function getOrders() {
  try {
    const response = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/orders`);
    if (response.ok) {
      orders = await response.json();
    }
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Get the latest orders
    await getOrders();
    
    const { id: orderId } = await params;
    
    // Find the specific order
    const order = orders.find(o => o._id === orderId);
    
    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}
