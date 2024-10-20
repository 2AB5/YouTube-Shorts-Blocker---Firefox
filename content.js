// Helper to remove and log Shorts elements
const removeShorts = () => {
  const selectors = [
    'ytd-rich-item-renderer:has(a[href^="/shorts"])',  // Homepage
    'ytd-grid-video-renderer:has(a[href^="/shorts"])', // Grids
    'ytd-reel-shelf-renderer',                        // Shorts shelf
    'a[href^="/shorts"]'                              // Any link to Shorts
  ];

  let removedCount = 0; // Track the number of elements removed

  // Loop through all matching elements and remove them
  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.remove();
      console.log(`[Shorts Blocker] Removed element: ${selector}`);
      removedCount++;
    });
  });

  if (removedCount > 0) {
    console.log(`[Shorts Blocker] Total elements removed: ${removedCount}`);
  }
};

// Monitor the page for changes and remove new Shorts elements
const observer = new MutationObserver(() => removeShorts());
observer.observe(document.body, { childList: true, subtree: true });

// Run immediately when the script loads
removeShorts();
