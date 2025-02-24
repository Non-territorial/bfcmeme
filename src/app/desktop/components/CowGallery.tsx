import Image from "next/image";

export default function CowGallery() {
    return (
        <section className="py-20 bg-black text-white text-center">
            <h2 className="text-4xl font-bold mb-10">🐄 Burping Cow Drip</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6">
                {/* Image 1 */}
                <div className="w-full md:w-1/3">
                    <Image
                        src="/images/BFC_2.jpg" // Adjust path to match public folder
                        width={400}
                        height={400}
                        alt="BFCMEME Drip 1"
                        className="rounded-lg"
                    />
                </div>

                {/* Image 2 */}
                <div className="w-full md:w-1/3">
                    <Image
                        src="/images/BFC_3.jpg" // Adjust path to match public folder
                        width={400}
                        height={400}
                        alt="BFCMEME Drip 2"
                        className="rounded-lg"
                    />
                </div>

                {/* Image 3 */}
                <div className="w-full md:w-1/3">
                    <Image
                        src="/images/BFC_5.png" // Adjust path to match public folder
                        width={400}
                        height={400}
                        alt="BFCMEME Drip 3"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
