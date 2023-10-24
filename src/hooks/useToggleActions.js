'use client'
import {useState} from "react";

export default function useToggleActions() {
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    function handleMenu() {
        setShowMenu(true)
        setShowSearch(false)
    }

    function handleSearch() {
        setShowMenu(false)
        setShowSearch(true)
    }

    function handleCloseMenu() {
        setShowMenu(false)
    }

    function handleCloseSearch() {
        setShowSearch(false)
    }

    return {showMenu, showSearch, handleMenu, handleSearch, handleCloseMenu, handleCloseSearch}
}
