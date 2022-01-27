export const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) return;
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  const onclick = (index) => {
    const currentIndex = index;
    setCurrentIndex(currentIndex);
  };
  return { currentItem: allTabs[currentIndex], onclick: onclick };
};