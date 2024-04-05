export const ProgressService = {
  getProgress(activeIndex, dataQuantity) {
    return Math.round(((activeIndex + 1) / dataQuantity) * 100);
  },
};
