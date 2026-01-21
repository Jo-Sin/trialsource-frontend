const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    return (
        <div className="tsrc-container p-8">
            {children}
        </div>
    )
}

export default Container