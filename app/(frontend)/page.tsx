import { Header } from "@/components/shared/header";
import { Wrapper } from "@/components/shared/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

export default function Home() {
	return (
		<div className="relative pt-36 min-h-svh">
			<Header />
			{/* hero section start */}
			<Wrapper className="md:gap-6 grid md:grid-cols-2">
				<section className="justify-self-center md:justify-self-start max-w-96 md:max-w-md text-center md:text-start text-balance">
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground font-bold text-transparent text-3xl md:text-5xl"
					>
						Digital art for the modern collector
					</motion.h1>
					<p className="pt-4 pb-10 font-semibold text-muted-foreground text-sm">
						Discover unique digital products from talented artists around the
						world. Own, collect, and experience art in a whole new dimension.
					</p>
					<div className="flex flex-wrap gap-4 pb-6 md:pb-16">
						<Button className="flex-1">Explorer more</Button>
						<Button variant="outline" className="flex-1">
							Start selling
							<ArrowRight />
						</Button>
					</div>
					<motion.ul
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="hidden md:grid grid-cols-3 [&>li>span]:font-semibold [&>li>span]:text-primary [&>li>p]:text-sm"
					>
						<li>
							<span>150+</span>
							<p>Product</p>
						</li>
						<li>
							<span>26+</span>
							<p>Seller</p>
						</li>
						<li>
							<span>300+</span>
							<p>Total sales</p>
						</li>
					</motion.ul>
				</section>
				<section>
					<img
						src="/objects.png"
						alt="illustration objects"
						className="object-cover"
					/>
				</section>
				<motion.ul
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className="md:hidden grid grid-cols-3 pt-8 [&>li>span]:font-semibold [&>li>span]:text-primary [&>li>p]:text-sm"
				>
					<li>
						<span>150+</span>
						<p>Product</p>
					</li>
					<li>
						<span>26+</span>
						<p>Seller</p>
					</li>
					<li>
						<span>300+</span>
						<p>Total sales</p>
					</li>
				</motion.ul>
			</Wrapper>
			{/* hero section end */}
		</div>
	);
}
