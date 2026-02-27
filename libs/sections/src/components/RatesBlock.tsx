import React from 'react'
import { formatPrice } from '@smartbooking/booking'

export interface RateOption {
  id: string
  name: string
  description?: string
  isBest?: boolean
  isMemberOnly?: boolean
  refundable?: boolean
  includesBreakfast?: boolean
  currency: string
  pricePerNight: number
  totalPrice: number
  memberPrice?: number
  taxes?: number
}

interface RatesBlockProps {
  rates: RateOption[]
  selectedRateId?: string
  onSelectRate?: (rateId: string) => void
}

export function RatesBlock({ rates, selectedRateId, onSelectRate }: RatesBlockProps) {
  if (!rates.length) return null

  return (
    <section className="space-y-4 rounded-3xl border border-[color:var(--color-border-subtle)] bg-[var(--color-surface)] p-6 sm:p-8">
      <header className="mb-4">
        <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)] mb-2">
          Тарифы
        </p>
        <h2 className="text-xl font-medium tracking-tight text-[var(--color-text)]">
          Выберите условия проживания
        </h2>
      </header>

      <div className="space-y-3">
        {rates.map((rate) => {
          const isSelected = rate.id === selectedRateId

          return (
            <button
              key={rate.id}
              type="button"
              onClick={() => onSelectRate?.(rate.id)}
              className={`
                w-full rounded-2xl border px-4 py-4 text-left
                transition-all duration-200
                ${
                  isSelected
                    ? 'border-[color:var(--color-accent)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-soft)]'
                    : 'border-[color:var(--color-border-subtle)] bg-[var(--color-surface)] hover:border-[color:var(--color-accent)]/70 hover:bg-[var(--color-surface-elevated)]'
                }
              `}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-medium tracking-[0.12em] uppercase text-[var(--color-text)]">
                      {rate.name}
                    </p>
                    {rate.isBest && (
                      <span className="rounded-full border border-[color:var(--color-accent)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-[var(--color-accent)]">
                        Лучший выбор
                      </span>
                    )}
                    {rate.isMemberOnly && (
                      <span className="rounded-full border border-[color:var(--color-muted)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]">
                        Member rate
                      </span>
                    )}
                  </div>

                  {rate.description && (
                    <p className="text-xs text-[var(--color-muted)]">{rate.description}</p>
                  )}

                  <div className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {rate.refundable && <span>Бесплатная отмена</span>}
                    {rate.includesBreakfast && <span>Завтрак включён</span>}
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <p className="text-xs text-[var(--color-muted)]">за ночь</p>
                  <p className="text-lg font-semibold text-[var(--color-text)]">
                    {formatPrice(rate.pricePerNight, rate.currency)}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    Итого:{' '}
                    <span className="text-[var(--color-text)] font-medium">
                      {formatPrice(rate.totalPrice, rate.currency)}
                    </span>
                  </p>
                  {typeof rate.taxes === 'number' && (
                    <p className="text-[11px] text-[var(--color-muted)]">
                      Включая налоги {formatPrice(rate.taxes, rate.currency)}
                    </p>
                  )}
                  {rate.memberPrice && (
                    <p className="text-[11px] text-[var(--color-accent)]">
                      Member: {formatPrice(rate.memberPrice, rate.currency)}
                    </p>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

