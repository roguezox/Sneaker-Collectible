import {
    ArrowLeftIcon,
    ArrowRightIcon,
    CheckIcon,
    GlobeIcon,
    MenuIcon,
    MonitorIcon,
    PlayCircleIcon,
    RadioIcon,
    RocketIcon,
    SearchIcon,
    SettingsIcon,
    ShieldIcon,
    ShoppingCartIcon,
    XIcon,
} from "lucide-react";
import React, { useState, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const navItems = [
    { label: "Products", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Log In", href: "#" },
];

const features = [
    {
        title: "Nibh viverra",
        description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        decoratorClass: "absolute -top-14 left-[19px] w-[113px] h-[113px]",
        decoratorSrc: "/assets/Rectangle 25.png",
    },
    {
        title: "Cursus amet",
        description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        decoratorClass: "absolute -top-5 left-3.5 w-[71px] h-[71px]",
        decoratorSrc: "/assets/Rectangle 26.png",
    },
    {
        title: "Ipsum fermentum",
        description:
            "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
        decoratorClass:
            "absolute top-[3px] left-[55px] w-[60px] h-[60px] bg-fuchsia-700 rounded-[26.67px] opacity-50",
        decoratorSrc: "/assets/Rectangle 27.png",
    },
];

const bestProducts = [
    {
        image: "/assets/Picture.png",
        title: "Title",
        description:
            "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
        image: "/assets/Picture2.png",
        title: "Title",
        description:
            "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
    {
        image: "/assets/Picture3.png",
        title: "Title",
        description:
            "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    },
];

const whyJoinReasons = [
    "Est et in pharetra magna adipiscing ornare aliquam.",
    "Tellus arcu sed consequat ac velit ut eu blandit.",
    "Ullamcorper ornare in et egestas dolor orci.",
];

const testimonials = [
    {
        logo: "/assets/Vector.png",
        logoClass: "w-10 h-10",
        company: "Zoomerr",
        text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
        avatar: "/assets/user.jpg",
        name: "Hellen Jummy",
        role: "Team Lead",
    },
    {
        logo: "/assets/Vector2.png",
        logoClass: "w-10 h-10",
        company: "SHELLS",
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        avatar: "/assets/user2.jpg",
        name: "Hellena John",
        role: "Co-founder",
    },
    {
        logo: "/assets/Group 46.png",
        logoClass: "w-16 h-10",
        company: "ArtVenue",
        text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        avatar: "/assets/user3.jpg",
        name: "David Oshodi",
        role: "Manager",
    },
    {
        logo: "/assets/Vector2.png",
        logoClass: "w-10 h-10",
        company: "SHELLS",
        text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
        avatar: "/assets/user2.jpg",
        name: "Hellena John",
        role: "Co-founder",
    },
    {
        logo: "/assets/Group 46.png",
        logoClass: "w-16 h-10",
        company: "ArtVenue",
        text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
        avatar: "/assets/user3.jpg",
        name: "David Oshodi",
        role: "Manager",
    },
];

const collectionMenuItems = [
    { icon: SearchIcon, label: "Bibendum tellus", active: true },
    { icon: ShieldIcon, label: "Cras eget", active: false },
    { icon: RocketIcon, label: "Dolor pharetra", active: false },
    { icon: MonitorIcon, label: "Amet, fringilla", active: false },
    { icon: RadioIcon, label: "Amet nibh", active: false },
    { icon: SettingsIcon, label: "Sed velit", active: false },
];

const articles = [
    {
        image: "/assets/article7.jpg",
        title: "Congue velit risus",
        description:
            "Nunc gravida semper tellus neque scelerisque eget tincidunt in.",
    },
    {
        image: "/assets/article8.jpg",
        title: "Ut mauris",
        description: "Phasellus venenatis massa bibendum posuere dictum tristique.",
    },
    {
        image: "/assets/article9.jpg",
        title: "Aliquam tortor nunc",
        description:
            "Leo mollis fermentum praesent in condimentum id velit purus in.",
    },
    {
        image: "/assets/article10.jpg",
        title: "Fusce non morbi",
        description: "In sed bibendum metus pretium cursus tellus pharetra.",
    },
];

const events = [
    {
        category: "Ipsum",
        title: "Varius est diam",
        image: "/assets/events.jpg",
    },
    {
        category: "Purus",
        title: "Diam felis tempus",
        image: "/assets/events2.jpg",
    },
    {
        category: "Urna",
        title: "Vel nulla varius",
        image: "/assets/events3.jpg",
    },
    {
        category: "Vitae",
        title: "Amet tristique a",
        image: "/assets/events4.jpg",
    },
];

const footerSections = [
    {
        title: "Product",
        links: ["Pricing", "Overview", "Browse", "Accessibility", "Five"],
    },
    {
        title: "Solutions",
        links: ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"],
    },
    {
        title: "Support",
        links: [
            "Contact Us",
            "Developers",
            "Documentation",
            "Integrations",
            "Reports",
        ],
    },
];

export const Collers = (): JSX.Element => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const scrollTestimonials = (direction: 'left' | 'right') => {
        if (testimonialsRef.current) {
            const scrollAmount = 400;
            testimonialsRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-amber-50/95 backdrop-blur-sm border-b border-amber-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        {/* Logo */}
                        <div className="font-bold text-2xl lg:text-3xl text-amber-900">
                            Collers
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-2">
                            {navItems.map((item, index) => (
                                <Button
                                    key={index}
                                    variant="ghost"
                                    className="text-amber-900 font-medium hover:bg-amber-900/10"
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button className="ml-4 px-6 py-2 rounded-lg border-2 border-amber-900 bg-transparent text-amber-900 font-medium hover:bg-amber-900 hover:text-white transition-colors">
                                Sign up now
                            </Button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            className="lg:hidden p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <XIcon className="w-6 h-6 text-amber-900" />
                            ) : (
                                <MenuIcon className="w-6 h-6 text-amber-900" />
                            )}
                        </Button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="lg:hidden py-4 border-t border-amber-200">
                            <div className="flex flex-col gap-2">
                                {navItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        variant="ghost"
                                        className="justify-start text-amber-900 font-medium hover:bg-amber-900/10"
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                                <Button className="mt-2 px-6 py-2 rounded-lg border-2 border-amber-900 bg-transparent text-amber-900 font-medium hover:bg-amber-900 hover:text-white transition-colors">
                                    Sign up now
                                </Button>
                            </div>
                        </nav>
                    )}
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                                Collectible Sneakers
                            </h1>
                            <p className="text-lg text-slate-700 mb-8 max-w-xl mx-auto lg:mx-0">
                                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                                ultrices amet.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Button className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-amber-900 bg-transparent text-amber-900 font-medium text-lg hover:bg-amber-900 hover:text-white transition-colors">
                                    Sign up now
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="text-amber-900 font-medium hover:bg-amber-900/10"
                                >
                                    <PlayCircleIcon className="w-6 h-6 mr-2" />
                                    Watch Demo
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 relative w-full max-w-md lg:max-w-lg">
                            <div className="absolute top-16 left-12 right-8 bottom-8 sm:top-24 sm:left-24 sm:right-16 sm:bottom-16 bg-amber-400 rounded-3xl" />
                            <img
                                className="relative z-10 w-full h-auto"
                                alt="Collectible Sneakers"
                                src="/assets/herosneaker.png"
                            />
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
                        {features.map((feature, index) => (
                            <div key={index} className="relative pt-16">
                                {feature.decoratorSrc ? (
                                    <img
                                        className="absolute -top-4 left-4 w-20 h-16 opacity-50"
                                        alt="Decorator"
                                        src={feature.decoratorSrc}
                                    />
                                ) : (
                                    <div className="absolute -top-4 left-4 w-12 h-12 bg-fuchsia-700 rounded-2xl opacity-50" />
                                )}
                                <h3 className="text-xl font-medium text-slate-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-700 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Best Products Section */}
                <section className="bg-slate-900 py-12 lg:py-24 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-20 right-0 w-48 h-48 bg-green-700 rounded-full opacity-50 blur-sm" />
                    <div className="absolute bottom-20 right-20 w-40 h-40 bg-fuchsia-700 rounded-3xl opacity-50 blur-sm" />
                    <div className="absolute top-10 left-1/3 w-32 h-32 bg-sky-700 rounded-full opacity-50 blur-sm" />
                    <div className="absolute bottom-10 left-10 w-56 h-56 bg-pink-700 rounded-full opacity-50 blur-sm" />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                                The best of the best
                            </h2>
                            <Button className="px-6 py-4 rounded-lg border-2 border-white bg-transparent text-white font-bold hover:bg-white hover:text-slate-900 transition-colors">
                                Sign up now
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {bestProducts.map((product, index) => (
                                <Card
                                    key={index}
                                    className="bg-slate-800 border-slate-700 rounded-xl overflow-hidden shadow-2xl"
                                >
                                    <CardContent className="p-0">
                                        <div
                                            className="h-48 sm:h-56 lg:h-64 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${product.image})` }}
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-3">
                                                {product.title}
                                            </h3>
                                            <p className="text-slate-300 mb-6">
                                                {product.description}
                                            </p>
                                            <Button className="w-full py-4 rounded-lg border-2 border-white bg-transparent text-white font-medium hover:bg-white hover:text-slate-900 transition-colors">
                                                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                                                Buy Now
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Join Us Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                    <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 lg:p-16">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                            <div className="flex-1">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8">
                                    Why join us
                                </h2>
                                <div className="space-y-4 mb-8">
                                    {whyJoinReasons.map((reason, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                            <p className="text-slate-700 text-lg">{reason}</p>
                                        </div>
                                    ))}
                                </div>
                                <Button className="px-8 py-4 rounded-lg border-2 border-amber-900 bg-transparent text-amber-900 font-medium text-lg hover:bg-amber-900 hover:text-white transition-colors">
                                    Sign up now
                                </Button>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="bg-white rounded-2xl border-4 border-gray-200 shadow-2xl overflow-hidden">
                                    <div className="h-8 bg-gray-100 flex items-center gap-2 px-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-full h-auto"
                                            alt="Video preview"
                                            src="/assets/runners.jpg"
                                        />
                                        <img
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 cursor-pointer hover:scale-110 transition-transform"
                                            alt="Play"
                                            src="/assets/play.png"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="relative py-12 lg:py-24">
                    {/* Amber box behind - absolutely positioned */}
                    <div className="absolute top-1/4 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 bottom-20 bg-amber-200 rounded-3xl" />

                    {/* Transparent section with horizontal scroll cards - full width */}
                    <div className="w-full relative z-10">
                        <div className="container mx- auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                                    Because they love us
                                </h2>

                                <div className="flex gap-4">
                                    <Button
                                        type="button"
                                        className="p-3 rounded-full border-2 border-amber-900 bg-transparent hover:bg-amber-900/10"
                                        onClick={() => scrollTestimonials('left')}
                                    >
                                        <ArrowLeftIcon className="w-5 h-5 text-amber-900" />
                                    </Button>
                                    <Button
                                        type="button"
                                        className="p-3 rounded-full border-2 border-amber-900 bg-transparent hover:bg-amber-900/10"
                                        onClick={() => scrollTestimonials('right')}
                                    >
                                        <ArrowRightIcon className="w-5 h-5 text-amber-900" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Horizontal scroll container - full width overflow */}
                        <div ref={testimonialsRef} className="flex gap-6 overflow-x-auto pb-6 px-4 sm:px-6 lg:px-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {/* Left spacer for alignment */}
                            <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" />

                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-2xl border border-gray-200 shadow-lg"
                                >
                                    <CardContent className="p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <img
                                                className={testimonial.logoClass}
                                                alt={testimonial.company}
                                                src={testimonial.logo}
                                            />
                                            <span className="font-bold text-slate-600 text-xl">
                                                {testimonial.company}
                                            </span>
                                        </div>
                                        <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                            {testimonial.text}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-14 h-14 rounded-full bg-cover bg-center"
                                                style={{
                                                    backgroundImage: `url(${testimonial.avatar})`,
                                                }}
                                            />
                                            <div>
                                                <div className="font-medium text-slate-900">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-slate-500 text-sm">
                                                    {testimonial.role}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}

                            {/* Right spacer */}
                            <div className="flex-shrink-0 w-4" />
                        </div>
                    </div>
                </section>

                {/* Grow Collection Section */}
                <section className="relative overflow-hidden">
                    {/* Decorative brown backgrounds - layered */}
                    <img
                        className="absolute bottom-0 left-0 w-full h-auto z-0"
                        src="/assets/brown3.png"
                        alt=""
                    />
                    <img
                        className="absolute bottom-0 left-0 w-full h-auto z-[1]"
                        src="/assets/brown2.png"
                        alt=""
                    />
                    <img
                        className="absolute bottom-0 left-0 w-full h-auto z-[2]"
                        src="/assets/brown1.png"
                        alt=""
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
                        <div className="mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
                                Grow your collection
                            </h2>
                            <p className="text-slate-700 text-lg max-w-3xl">
                                Enim neque massa porta adipiscing elit. Sem libero id faucibus
                                nibh amet dictum pellentesque sed. Eu non turpis risus odio
                                sapien, fames sit rhoncus. Nec magna sed interdum sit purus
                                tellus.
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-64 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
                                {collectionMenuItems.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            className={`flex-shrink-0 lg:w-full p-4 justify-start rounded-xl ${item.active
                                                ? "bg-white shadow-md"
                                                : "hover:bg-white hover:shadow-md"
                                                } transition-all`}
                                        >
                                            <Icon className="w-6 h-6 text-slate-900" />
                                            <span className="ml-3 font-medium text-slate-900 whitespace-nowrap">
                                                {item.label}
                                            </span>
                                            {item.active && (
                                                <ArrowRightIcon className="w-5 h-5 text-slate-900 ml-auto hidden lg:block" />
                                            )}
                                        </Button>
                                    );
                                })}
                            </div>

                            <div className="flex-1 relative">
                                {/* Background browser window */}
                                <div className="absolute -top-8 left-4 w-[85%] bg-white rounded-2xl border-4 border-gray-200 shadow-xl overflow-hidden z-0">
                                    <div className="h-8 bg-gray-100 flex items-center gap-2 px-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            className="w-full h-auto"
                                            alt="Video preview"
                                            src="/assets/runners.jpg"
                                        />
                                        <img
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 cursor-pointer hover:scale-110 transition-transform"
                                            alt="Play"
                                            src="/assets/play.png"
                                        />
                                    </div>
                                </div>

                                {/* Foreground browser window */}
                                <div className="relative z-10 mt-8 ml-4 lg:mt-16 lg:ml-16 bg-white rounded-2xl border-4 border-gray-200 shadow-2xl overflow-hidden">
                                    <div className="h-8 bg-gray-100 flex items-center gap-2 px-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <img
                                        className="w-full h-auto"
                                        alt="Collection preview"
                                        src="/assets/collection.png"
                                    />
                                </div>

                                {/* Overlay image */}
                                <div className="hidden sm:block absolute bottom-20 -right-10 z-20 w-48 lg:w-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                    <img
                                        className="w-full h-auto"
                                        alt="Sneaker kick"
                                        src="/assets/kick.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-amber-900 py-16 sm:py-24 lg:py-80 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-100 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('/assets/worldmap.png')",
                        }}
                    />
                    {/* Ellipses overlay - hidden on mobile */}
                    <img
                        className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1]"
                        style={{ width: '965px', height: '600px' }}
                        src="/assets/Ellipses.png"
                        alt=""
                    />

                    {/* Shoe card overlay - hidden on small mobile */}
                    <div className="hidden sm:block absolute top-[10%] left-[5%] lg:left-[10%] z-[5]">
                        <div className="bg-white rounded-2xl p-2 shadow-2xl overflow-hidden w-64 lg:w-72">
                            <img
                                className="w-full h-56 object-cover rounded-xl"
                                src="/assets/downshoes.jpg"
                                alt="Cool Shoes"
                            />
                        </div>
                        <div className="mt-0 px-3 py-1 mr-12 ml-1 bg-white rounded-md shadow-lg">
                            <p className="text-xs text-slate-700 text-wrap ">Emma Simpson collected one pair of Cool <br /> Shoes.</p>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <div className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-amber-50 mb-4">
                            11,658,467
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-50">
                            Shoes Collected
                        </h2>
                    </div>
                </section>

                {/* Articles Section */}
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                            Articles by Collectors
                        </h2>
                        <Button
                            variant="ghost"
                            className="text-amber-900 font-medium hover:bg-amber-900/10"
                        >
                            More Articles
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {articles.map((article, index) => (
                            <Card
                                key={index}
                                className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden"
                            >
                                <CardContent className="p-0">
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${article.image})` }}
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 mb-4">{article.description}</p>
                                        <Button
                                            variant="ghost"
                                            className="p-0 text-amber-900 font-medium hover:bg-transparent hover:text-amber-700"
                                        >
                                            Read article
                                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Events Section */}
                <section className="relative bg-amber-100 py-12 lg:py-24 overflow-hidden">


                    {/* Blue wave background */}
                    <img
                        className="absolute bottom-0 right-0 w-full h-auto z-0"
                        src="/assets/bluewave.png"
                        alt=""
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
                                Amazing events
                            </h2>
                            <Button
                                variant="ghost"
                                className="text-amber-900 font-medium hover:bg-amber-900/10"
                            >
                                Explore Articles
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {events.map((event, index) => (
                                <Card
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                                >
                                    <CardContent className="p-4">
                                        <div className="mb-3">
                                            <span className="text-sm font-medium text-slate-600">
                                                {event.category}
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                {event.title}
                                            </h3>
                                        </div>
                                        <div
                                            className="h-48 rounded-xl bg-cover bg-center"
                                            style={{ backgroundImage: `url(${event.image})` }}
                                        />
                                        <Button
                                            variant="ghost"
                                            className="mt-4 p-0 text-amber-900 font-medium hover:bg-transparent hover:text-amber-700"
                                        >
                                            Buy Tickets
                                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-slate-900 py-12 lg:py-24 relative overflow-hidden">
                    {/* Decorative rectangles */}
                    {/* rect3 - blue, at the back bottom */}
                    <div className="h-8 w-full">

                    </div>
                    <img
                        className="hidden sm:block absolute bottom-12 right-0 w-20 lg:w-26 h-20 lg:h-24 z-0"
                        src="/assets/rect3.png"
                        alt=""
                    />
                    <img
                        className="hidden sm:block absolute -top-0 right-8 w-24 lg:w-42 h-auto z-[1]"
                        src="/assets/rect1.png"
                        alt=""
                    />
                    <img
                        className="hidden sm:block absolute top-8 right-0 w-20 lg:w-24 h-28 lg:h-36 z-[2]"
                        src="/assets/rect2.png"
                        alt=""
                    />

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center sm:text-left">
                                Collect More Sneakers Today
                            </h2>
                            <Button className="px-8 py-4 mx-12 rounded-lg border-2 border-white bg-transparent text-white font-bold text-lg hover:bg-white hover:text-slate-900 transition-colors">
                                Sign up now
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 pt-12 lg:pt-16 pb-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-12 border-b border-slate-700">
                        {footerSections.map((section, index) => (
                            <div key={index}>
                                <h4 className="font-medium text-white mb-4">{section.title}</h4>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a
                                                href="#"
                                                className="text-slate-400 hover:text-white transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div>
                            <h4 className="font-medium text-white mb-4">Get the App</h4>
                            <div className="space-y-3">
                                <img
                                    className="h-10"
                                    alt="App Store"
                                    src="/assets/appstore.png"
                                />
                                <div className="h-10 w-32 bg-black rounded flex items-center justify-center">
                                    <img
                                        className="h-10"
                                        alt="App Store"
                                        src="/assets/googleplay.png"
                                    />
                                </div>
                            </div>
                            <h4 className="font-medium text-white mt-8 mb-4">Follow Us</h4>
                            <img
                                className="h-8"
                                alt="Social icons"
                                src="/assets/socials.png"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                        <p className="text-slate-400 text-sm">
                            Collers © 2023. All rights reserved.
                        </p>
                        <nav className="flex flex-wrap items-center justify-center gap-6">
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors text-sm"
                            >
                                Terms
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors text-sm"
                            >
                                Privacy
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors text-sm"
                            >
                                Contact
                            </a>
                            <a
                                href="#"
                                className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                            >
                                <GlobeIcon className="w-4 h-4" />
                                EN
                            </a>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    );
};
