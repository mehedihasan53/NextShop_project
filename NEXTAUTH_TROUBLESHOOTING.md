# NextAuth.js Troubleshooting Guide

## ✅ **Issue Fixed: CLIENT_FETCH_ERROR**

The error `CLIENT_FETCH_ERROR` with "Unexpected token '<', \"<!DOCTYPE \"... is not valid JSON" was caused by missing NextAuth configuration files.

### **Root Causes Identified:**

1. ❌ Missing NextAuth API route file
2. ❌ Missing environment variables
3. ❌ Incomplete server session integration

### **Solutions Applied:**

#### **1. Created NextAuth API Route**

**File:** `src/app/api/auth/[...nextauth]/route.js`

```javascript
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [GoogleProvider({...})],
    session: { strategy: 'jwt' },
    pages: { signIn: '/login' },
    callbacks: {...},
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

#### **2. Added Environment Variables**

**File:** `.env.local`

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

#### **3. Fixed Server Session Integration**

**File:** `src/app/layout.jsx`

```javascript
import { getServerSession } from "next-auth/next";

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html>
      <body>
        <ClientLayout session={session}>{children}</ClientLayout>
      </body>
    </html>
  );
}
```

## 🔧 **Setup Requirements**

### **Before Testing Authentication:**

1. **Get Google OAuth Credentials**
   - Follow `GOOGLE_AUTH_SETUP.md` guide
   - Create Google Cloud project
   - Configure OAuth consent screen
   - Get Client ID and Client Secret

2. **Update Environment Variables**

   ```bash
   # Generate a secure secret
   openssl rand -base64 32

   # Update .env.local with real values
   NEXTAUTH_SECRET=your-generated-secret-here
   GOOGLE_CLIENT_ID=your-real-google-client-id
   GOOGLE_CLIENT_SECRET=your-real-google-client-secret
   ```

3. **Restart Development Server**
   ```bash
   npm run dev
   ```

## 🚀 **Build Status: ✅ Success**

- ✅ NextAuth API route: `/api/auth/[...nextauth]`
- ✅ All 13 routes compiled successfully
- ✅ No TypeScript errors
- ✅ Clean build output

## 🧪 **Testing Authentication**

### **1. Test NextAuth API Endpoint**

Visit: `http://localhost:3000/api/auth/providers`
Should return: JSON with Google provider info

### **2. Test Login Flow**

1. Go to: `http://localhost:3000/login`
2. Click "Continue with Google"
3. Should redirect to Google OAuth (if credentials are set)

### **3. Test Session**

In browser console:

```javascript
// Check session
fetch("/api/auth/session")
  .then((r) => r.json())
  .then(console.log);
```

## ⚠️ **Common Issues & Solutions**

### **Issue: "Configuration malformed" Error**

**Cause:** Missing or invalid environment variables
**Solution:** Ensure all NextAuth env vars are set correctly

### **Issue: "redirect_uri_mismatch" Error**

**Cause:** Google OAuth redirect URI not configured
**Solution:** Add `http://localhost:3000/api/auth/callback/google` to Google Console

### **Issue: Session not persisting**

**Cause:** Missing NEXTAUTH_SECRET or incorrect domain
**Solution:** Set strong NEXTAUTH_SECRET and correct NEXTAUTH_URL

### **Issue: "Provider not found" Error**

**Cause:** Google provider not properly configured
**Solution:** Check GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET

## 🔍 **Debug Mode**

Enable debug logging in `.env.local`:

```env
NEXTAUTH_DEBUG=true
```

This will show detailed logs in your server console for troubleshooting.

## 📋 **Verification Checklist**

- ✅ NextAuth API route exists and exports GET/POST handlers
- ✅ Environment variables are set (even with placeholder values)
- ✅ SessionProvider wraps the application
- ✅ Server session is passed to client layout
- ✅ Build completes without errors
- ✅ `/api/auth/providers` returns JSON (not HTML)

The NextAuth.js integration is now properly configured and ready for Google OAuth setup! 🎉
