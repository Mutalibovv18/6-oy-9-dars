import React, { useRef } from 'react';

function First() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;

        if (!name) {
            alert("Ismni kiriting");
            return;
        }

        if (!email) {
            alert("Emailni kiriting");
            return;
        }

        console.log({ name, email });
        nameRef.current.value = "";
        emailRef.current.value = "";
    };

    return (
        <div>
            <form className="w-[600px] bg-orange-200 p-4 ml-[400px] mt-[20px]" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    ref={nameRef}
                    className="w-full p-2 mb-4"
                />
                <input
                    type="email"
                    placeholder="Emailingini kiriting"
                    ref={emailRef}
                    className="w-full p-2 mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 w-full">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default First;
