export interface MarkdownBlock {
  kind: "markdown";
  markdown: string;
}

export interface RedactedBlock {
  kind: "redacted";
  markdown: string;
  revealed: boolean;
}

export type DescriptionBlock =
  | MarkdownBlock
  | RedactedBlock;

export interface Description {
  summary: string;
  blocks: DescriptionBlock[];
}