"use client"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { MenuIcon, X } from "lucide-react";
import DashBoardSideNavBar from "./dashboard-navbar";

export default function MobileSidebar()
{
    let [isOpen, setIsOpen] = useState(false);

    function closeModal()
    {
        setIsOpen(false);
    }

    function openModal()
    {
        setIsOpen(true);
    }

    return (
        <>
            <button type="button" onClick={openModal} className="hidden max-md:block">
                <MenuIcon className="  hidden max-md:block" size={30} />
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed  z-50 overflow-hidden"
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition-transform ease-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition-transform ease-in duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className="fixed inset-0" onClick={closeModal} />
                    </Transition.Child>

                    <div className="fixed inset-0 flex items-center justify-start">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition-transform ease-out duration-300"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition-transform ease-in duration-200"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="w-fit mt-[20vh]   h-dvh relative z-[9999] max-w-md transform overflow-hidden rounded-2xl shadow-xl transition-all">
                                <DashBoardSideNavBar inMobileView={true} />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
