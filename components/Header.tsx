import Logo from "@/components/Logo";

const Header = () => {
    return (
        <>
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="py-3 px-3 mx-auto max-w-3xl">
                    <Logo/>
                </div>
            </header>
        </>
    );
};
export default Header