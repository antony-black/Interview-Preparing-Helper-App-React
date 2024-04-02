export default function getProgress(activeIndex, dataQuantity) {
  return Math.round(((activeIndex + 1) / dataQuantity) * 100);
}
