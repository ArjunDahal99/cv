"use client"

const SignOutButton = ({ signOut }: { signOut: () => void }) =>
{
    return (
        <h1
            onClick={() => { signOut() }}
        >Sign Out</h1>
    )
}

export default SignOutButton