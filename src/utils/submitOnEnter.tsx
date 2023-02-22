export const submitOnEnter = (e: React.KeyboardEvent, callback: () => void) => {
  if (e.key === "Enter") {
    callback();
  }
};
