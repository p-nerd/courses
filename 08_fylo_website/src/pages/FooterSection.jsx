import FooterItem from "../components/FooterItem";

const FooterSection = () => {
    return (
        <footer className="bg-dark-blue-2">
            <div className="container mx-auto px-5 pb-10">
                <div className="flex flex-col justify-center space-y-24 md:flex-row md:space-y-0">
                    <div className="mt-10 space-y-6">
                        <FooterItem
                            img="/images/icon-phone.svg"
                            content="+1-543-123-4567"
                        />
                        <FooterItem
                            img="/images/icon-email.svg"
                            content="example@fylo.com"
                        />
                    </div>
                    <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
                        <div className="flex flex-col space-y-3">
                            <a href="#">About</a>
                            <a href="#">Jobs</a>
                            <a href="#">Press</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <a href="#">Contact Us</a>
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
