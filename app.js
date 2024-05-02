const cats = {
  moxie: {
    color: "calico",
    personality: "talkative",
  },
  gus: {
    color: "orange",
    personality: "mellow",
  },
};

const talkativeCatNames = Object.keys(cats).filter(
  (catName) => cats[catName].personality === "talkative"
);

console.log(talkativeCatNames);
