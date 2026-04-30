import React from 'react'
import { clientData } from '../../data/data'
import Image from 'next/image'
import { getTestimonialPhotoSrc, type PublicTestimonial } from '@/lib/public-testimonials'

interface ClientData {
  image: string
  name: string
  position: string
  title: string
  desc: string
}

function StarRow({ rating }: { rating: number }) {
  const n = Math.min(5, Math.max(0, Math.round(rating)))
  return (
    <div className="jobstock-reviews-rates">
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={`fa-solid fa-star${i < n ? '' : ' deactive'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function splitFeedback(feedback: string): { lead: string | null; rest: string } {
  const lines = feedback.trim().split(/\r?\n/)
  if (lines.length <= 1) {
    return { lead: null, rest: feedback.trim() }
  }
  const lead = (lines[0] ?? '').trim() || null
  const rest = lines.slice(1).join('\n').trim()
  return { lead, rest: rest || feedback.trim() }
}

type Props = {
  items?: PublicTestimonial[] | null
}

export default function ClientOne({ items }: Props) {
  const fromApi = items && items.length > 0

  if (fromApi) {
    return (
      <div className="row justify-content-center gx-4 gy-4">
        {items!.map((item, index) => {
          const imgSrc = getTestimonialPhotoSrc(item.photo, index)
          // Laravel `storage` URLs are cross-origin vs the Next.js origin.
          // `next/image` enforces `remotePatterns` and often breaks admin uploads; plain <img> always loads if URL is valid.
          const isAbsoluteHttp =
            imgSrc.startsWith('http://') || imgSrc.startsWith('https://')
          const { lead, rest } = splitFeedback(item.feedback)
          return (
            <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
              <div className="jobstock-reviews-box">
                <div className="jobstock-reviews-desc">
                  {lead ? <h6 className="review-title-yui">{lead}</h6> : null}
                  <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                    {rest}
                  </p>
                </div>
                <div className="jobstock-reviews-flex">
                  <div className="jobstock-reviews-thumb">
                    <div className="jobstock-reviews-figure">
                      {isAbsoluteHttp ? (
                        <img
                          src={imgSrc}
                          alt={item.name}
                          className="img-fluid circle"
                          width={120}
                          height={120}
                          loading="lazy"
                          decoding="async"
                          style={{
                            width: '100%',
                            maxWidth: 120,
                            height: 'auto',
                            aspectRatio: '1',
                            objectFit: 'cover',
                          }}
                        />
                      ) : (
                        <Image
                          src={imgSrc}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                          className="img-fluid circle"
                          alt={item.name}
                        />
                      )}
                    </div>
                  </div>
                  <div className="jobstock-reviews-caption">
                    <div className="jobstock-reviews-title">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="jobstock-reviews-designation">
                      <span>{item.designation ?? ''}</span>
                    </div>
                    <StarRow rating={item.rating} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="row justify-content-center gx-4 gy-4">
      {clientData.map((item: ClientData, index: number) => (
        <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
          <div className="jobstock-reviews-box">
            <div className="jobstock-reviews-desc">
              <h6 className="review-title-yui">{item.title}</h6>
              <p>{item.desc}</p>
            </div>
            <div className="jobstock-reviews-flex">
              <div className="jobstock-reviews-thumb">
                <div className="jobstock-reviews-figure">
                  <Image
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="img-fluid circle"
                    alt=""
                  />
                </div>
              </div>
              <div className="jobstock-reviews-caption">
                <div className="jobstock-reviews-title">
                  <h4>{item.name}</h4>
                </div>
                <div className="jobstock-reviews-designation">
                  <span>{item.position}</span>
                </div>
                <StarRow rating={5} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
