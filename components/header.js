import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav>
                <div>
                    <Image src="/images/Seecondary Logo copy 2.svg" width={200} height={100} alt="tobams-group logo" />
                    <div>
                        <Image src="/user.svg" width={24} height={24} alt="user-icon" />
                        <select>
                            Account
                            <option>User</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <Link href="/">Take Assessment</Link>
                </div>
                <div>
                    <select>
                        <option>About</option>
                    </select>
                    <select>
                        <option>What We Do</option>
                    </select>
                    <select>
                        <option>Jobs</option>
                    </select>
                    <div>TG Academy</div>
                    <div>Strategic Partnership</div>
                    <div>Pricing</div>
                    <div>Book a Consultation</div>
                </div>
            </nav>
            {/* <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center"> */}
            <section>
                <Link href="/">WHAT WE DO</Link>
                <h1>Training and Development</h1>
                <p>Our comprehensive range of programs and resources is designed to enhance skills,
                    broaden knowledge, and propel careers forward in today's ever-evolving landscape.
                </p>
                <Link href="/">Book a Consultation</Link>
            </section>
        </>
    );
}

export default Header;