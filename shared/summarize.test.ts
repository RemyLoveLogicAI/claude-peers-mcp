import { describe, expect, it } from "bun:test";
import { generateSummary } from "./summarize.js";

describe("summarize", () => {
  it("returns null when OPENAI_API_KEY is not set", async () => {
    const originalKey = process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_API_KEY;
    try {
      const result = await generateSummary({
        cwd: "/test",
        git_root: null,
      });
      expect(result).toBeNull();
    } finally {
      if (originalKey !== undefined) {
        process.env.OPENAI_API_KEY = originalKey;
      }
    }
  });
});
