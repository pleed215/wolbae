import * as React from "react"
import { MenuLinks } from "../../graphql-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { Link } from "gatsby"

type MobileMenuItemProps = {
    menu: MenuLinks
}

const subMenuVars: Variants = {
    hidden: {
        opacity: 0,
        y: "-20%",
    },
    show: {
        opacity: 1,
        y: "0",
        transition: {
            duration: 0.2,
        },
    },
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ menu }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false)

    const onClickMenu = () => {
        setSubMenuOpen(prev => !prev)
    }

    return (
        <div className={"cursor-pointer w-full"}>
            <div
                className={
                    "w-full flex p-3 bg-gray-100 justify-between items-center border-b border-gray-300"
                }
                onClick={onClickMenu}
            >
                <p>{menu.name}</p>
                {subMenuOpen ? (
                    <FontAwesomeIcon icon={faChevronUp} size={"sm"} />
                ) : (
                    <FontAwesomeIcon icon={faChevronDown} size="sm" />
                )}
            </div>
            {subMenuOpen && (
                <motion.ul
                    variants={subMenuVars}
                    animate={subMenuOpen ? "show" : "hidden"}
                    initial={"hidden"}
                    className={"bg-gray-50"}
                >
                    {menu.subMenu?.map(
                        subMenu =>
                            subMenu && (
                                <Link key={subMenu.name} to={subMenu.link!}>
                                    <li
                                        className={
                                            "py-4 px-5 hover:bg-gray-200"
                                        }
                                    >
                                        {subMenu.name}
                                    </li>
                                </Link>
                            )
                    )}
                </motion.ul>
            )}
        </div>
    )
}

export default MobileMenuItem
