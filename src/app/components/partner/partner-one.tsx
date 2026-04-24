import Image from 'next/image'
import React from 'react'

export const partnerLogoSrcs = [
    '/img/c1.png',
    '/img/c2.png',
    '/img/c3.png',
    '/img/c4.png',
    '/img/c5.png',
    '/img/c6.png',
] as const

/** Single horizontal trust row (sbnri.com–style): centered flex, consistent logo height */
export default function PartnerOne() {
  return (
        <div
            className="d-flex flex-wrap align-items-center justify-content-center gap-4 gap-md-5 gap-xl-5 px-1"
            role="list"
        >
            {partnerLogoSrcs.map((item, index) => (
                <div
                    key={index}
                    className="d-flex align-items-center justify-content-center"
                    role="listitem"
                    style={{ minHeight: 48 }}
                >
                    <figure className="single-brand thumb-figure mb-0">
                        <Image
                            src={item}
                            width={0}
                            height={0}
                            sizes="120px"
                            style={{
                                width: 'auto',
                                height: 'clamp(36px, 5vw, 48px)',
                                maxWidth: 160,
                            }}
                            className="img-fluid"
                            alt="Partner logo"
                        />
                    </figure>
                </div>
            ))}
        </div>
  )
}
