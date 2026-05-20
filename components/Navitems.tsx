'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

const navitems = [
    { title: 'Home', href: '/home' },
    { title: 'Pricing', href: '/subscription' },
    { title: 'About', href: '/about' }
]
const Navitems = () => {
    const pathname = usePathname();


    return (

        <nav className="flex items-center gap-4">
            {
                navitems.map(({ title, href }) => (
                    <Link href={href} key={title} className={cn(pathname === href && " text-primary font-semibold")}>
                        {title}
                    </Link>
                ))
            }
        </nav>
    )
}

export default Navitems