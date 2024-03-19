import './globals.css'
import AuthContext from './context/AuthContext'
//import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'

export const metadata: Metadata = {
  title: "Next Messenger",
  description: "Next Messenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
