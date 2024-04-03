"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed h-screen w-screen bg-white top-0 left-0 z-50 block md:hidden container py-5"
        >
          <div className="flex items-center justify-between">
            <Logo />

            <button
              className="w-8 h-8 flex items-center justify-center"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
              </svg>
            </button>
          </div>

          <ul className="uppercase text-xl font-medium tracking-[0.7px] flex flex-col gap-10 pt-24">
            <li onClick={onClose}>
              <Link href={"/"}>HOME</Link>
            </li>
            <li onClick={onClose}>
              <Link href={"/"}>Peace advantage</Link>
            </li>
            <li onClick={onClose}>
              <Link href={"/"}>careers</Link>
            </li>
            <li onClick={onClose}>
              <Link href={"/"}>inflight magazine</Link>
            </li>

            <li onClick={onClose}>
              <Link href={"/"} className="flex items-center leading-[0px]">
                More{" "}
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_0_562"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                  >
                    <rect width={24} height={24} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_562)">
                    <path
                      d="M12 15.0384L6.34616 9.38464L7.39999 8.33081L12 12.9308L16.6 8.33081L17.6538 9.38464L12 15.0384Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Link>
            </li>

            <li onClick={onClose}>
              <Link href={"/"} className="flex items-center gap-1">
                Login{" "}
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_0_568"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                  >
                    <rect width={20} height={20} fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_568)">
                    <path
                      d="M2.5 16.6666V14.3333C2.5 13.8611 2.62153 13.4271 2.86458 13.0312C3.10764 12.6354 3.43056 12.3333 3.83333 12.125C4.69444 11.6944 5.56944 11.3715 6.45833 11.1562C7.34722 10.941 8.25 10.8333 9.16667 10.8333C9.44444 10.8333 9.72222 10.8437 10 10.8646C10.2778 10.8854 10.5556 10.9166 10.8333 10.9583C10.7778 11.7639 10.9236 12.5243 11.2708 13.2396C11.6181 13.9548 12.125 14.5416 12.7917 15V16.6666H2.5ZM15.8333 19.1666L14.5833 17.9166V14.0416C13.9722 13.8611 13.4722 13.5173 13.0833 13.0104C12.6944 12.5035 12.5 11.9166 12.5 11.25C12.5 10.4444 12.7847 9.75692 13.3542 9.18748C13.9236 8.61804 14.6111 8.33331 15.4167 8.33331C16.2222 8.33331 16.9097 8.61804 17.4792 9.18748C18.0486 9.75692 18.3333 10.4444 18.3333 11.25C18.3333 11.875 18.1563 12.4305 17.8021 12.9166C17.4479 13.4028 17 13.75 16.4583 13.9583L17.5 15L16.25 16.25L17.5 17.5L15.8333 19.1666ZM9.16667 9.99998C8.25 9.99998 7.46528 9.67359 6.8125 9.02081C6.15972 8.36804 5.83333 7.58331 5.83333 6.66665C5.83333 5.74998 6.15972 4.96526 6.8125 4.31248C7.46528 3.6597 8.25 3.33331 9.16667 3.33331C10.0833 3.33331 10.8681 3.6597 11.5208 4.31248C12.1736 4.96526 12.5 5.74998 12.5 6.66665C12.5 7.58331 12.1736 8.36804 11.5208 9.02081C10.8681 9.67359 10.0833 9.99998 9.16667 9.99998ZM15.4167 11.6666C15.6528 11.6666 15.8507 11.5868 16.0104 11.4271C16.1701 11.2673 16.25 11.0694 16.25 10.8333C16.25 10.5972 16.1701 10.3993 16.0104 10.2396C15.8507 10.0798 15.6528 9.99998 15.4167 9.99998C15.1806 9.99998 14.9826 10.0798 14.8229 10.2396C14.6632 10.3993 14.5833 10.5972 14.5833 10.8333C14.5833 11.0694 14.6632 11.2673 14.8229 11.4271C14.9826 11.5868 15.1806 11.6666 15.4167 11.6666Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
