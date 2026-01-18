import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                // Demo authentication with hardcoded credentials
                const DEMO_EMAIL = 'admin@gmail.com';
                const DEMO_PASSWORD = '123456';

                if (credentials?.email === DEMO_EMAIL && credentials?.password === DEMO_PASSWORD) {
                    // Return user object on successful authentication
                    return {
                        id: '1',
                        name: 'Admin User',
                        email: DEMO_EMAIL,
                        image: 'https://ui-avatars.com/api/?name=Admin+User&background=0ea5e9&color=fff&size=128'
                    };
                }

                // Return null if authentication fails
                return null;
            }
        })
    ],

    // Use JWT strategy for session handling
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    // Custom pages
    pages: {
        signIn: '/login',
        error: '/login',
    },

    // Callbacks for customizing behavior
    callbacks: {
        async jwt({ token, user }) {
            // Persist user data to the token right after signin
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.picture = user.image;
            }
            return token;
        },

        async session({ session, token }) {
            // Send properties to the client
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.email = token.email;
            session.user.image = token.picture;
            return session;
        },

        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;

            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url;

            // Default redirect to items page after successful login
            return `${baseUrl}/items`;
        }
    },

    // Security options
    secret: process.env.NEXTAUTH_SECRET,

    // Enable debug messages in development
    debug: process.env.NODE_ENV === 'development',
};

// Create the handler
const handler = NextAuth(authOptions);

// Export for App Router
export { handler as GET, handler as POST };