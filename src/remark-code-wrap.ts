type MarkdownNode = {
  type?: string;
  lang?: string | null;
  meta?: string | null;
  children?: MarkdownNode[];
};

export default function remarkCodeWrap() {
  return (tree: MarkdownNode) => {
    function visit(node: MarkdownNode) {
      if (node.type === "code" && node.lang?.endsWith(",wrap")) {
        node.lang = node.lang.slice(0, -",wrap".length) || null;
        node.meta = [node.meta, "wrap"].filter(Boolean).join(" ");
      }

      node.children?.forEach(visit);
    }

    visit(tree);
  };
}
