import Link from "next/Link";
import {Button } from "./ui/button";
import { Span } from "next/dist/trace";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Avishka<span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                <div className="xl:hidden">mobile nav</div>

            </div>
        </header>
    );
};

export default Header;