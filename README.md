# next-messenger
A real-time communication app

Developed with next.js, typescript, TailwindCSS, react, Github authentication, mongoDB, Prisma 

### Key Features:

- Real-time messaging using Pusher
- Message notifications and alerts
- TailwindCSS UI design
- Credential authentication with NextAuth
- Github authentication integration
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Message read receipts
- Online/offline user status
- Group chats and one-on-one messaging
- Message attachments and file sharing
- User profile customization and settings
- Creating and managing chat rooms and channels

### Getting Started

##### Setup .env file
Register github OAuth app and config .env

```js
DATABASE_URL=
NEXTAUTH_SECRET=

GITHUB_ID=
GITHUB_SECRET=
```

##### Setup Prisma

```shell
npx prisma db push

```

##### Start the app

```shell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
