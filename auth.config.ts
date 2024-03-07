import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({auth, request: { nextUrl } }){
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn){
        return Response.redirect(new URL('/dashboard', nextUrl))
      }
      return true
    }
  },
  providers: [],
  secret: "Ybz/yFTKhuQEm7I5JKOEY1ubGB6XdIpg0ntjmpMmmUA="
} satisfies NextAuthConfig;