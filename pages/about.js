import Link from "next/link";

export default function about() {
    return (
        <div>
            <div>
                <h1>salut bro je suis la page about</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, quaerat quisquam, cupiditate tempore dicta ipsa quibusdam quia harum optio consequatur explicabo, eos magnam magni facere
                    voluptate reprehenderit beatae voluptas aspernatur?</p>
                <Link href='/'>Click to go the home page</Link>
            </div>
        </div>
    )
}