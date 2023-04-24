import Image from "next/image";

export default function About() {
    return (
        <div className="profile">
            <div className="profiletext">
                <h1>SEIEI NAGAHAMA</h1>
                B3 student<br></br>
                Dept. of ICS, Saitama University<br></br>
                Age : 21 <br></br>
                From : Sasebo, Nagasaki <br></br>
                a.k.a : 2xsei<br></br>
                <a href="https://twitter.com/solehamugoiyo3">
                    <Image
                        priority={true}
                        src="/twitter.svg"
                        alt="twitter"
                        width={30}
                        height={30}
                    />
                </a>
            </div>
        </div>
    );
}
