import MobileWhitelistForm from "@/app/mobile/components/MobileWhitelistForm";


export default function MobileWhitelistPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">
            {/* Render Whitelist Form */}
            <MobileWhitelistForm />
        </section>
    );
}

