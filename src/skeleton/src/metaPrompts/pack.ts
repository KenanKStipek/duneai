import { createMetaPrompt } from "../../../modules/MetaPrompt";
import type { MetaPromptType } from "../../../types";

export const packBase: MetaPromptType = createMetaPrompt({
  name: "JSON_BASE",
  model: "NOUS_HERMES",
  content: (params) => `
Take the following information and return a string of valid JSON data of this data with the key and value listed:
${params.BaseAttributes}

ONLY RETURN JSON DATA WITH OF A SINGLE DEPTH, no introduction, keys should use underscores rather than spaces.

MUST BE VALID JSON
`,
});

export const packExtendedBody: MetaPromptType = createMetaPrompt({
  name: "JSON_EXTENDED_BODY",
  model: "NOUS_HERMES",
  content: (params) => `
Take the following information and return a string of valid JSON data of this data with the key and value listed:
${params.ExtendedAttributes.BodyAttributes}

ONLY RETURN JSON DATA WITH OF A SINGLE DEPTH, no introduction, keys should use underscores rather than spaces.
MUST BE VALID JSON
`,
});

export const packExtendedHair: MetaPromptType = createMetaPrompt({
  name: "JSON_EXTENDED_HAIR",
  model: "NOUS_HERMES",
  content: (params) => `
Take the following information and return a string of valid JSON data of this data with the key and value listed:
${params.ExtendedAttributes.HairAttributes}

ONLY RETURN JSON DATA WITH OF A SINGLE DEPTH, no introduction, keys should use underscores rather than spaces.
MUST BE VALID JSON
`,
});

export const packExtendedFace: MetaPromptType = createMetaPrompt({
  name: "JSON_EXTENDED_FACE",
  model: "NOUS_HERMES",
  content: (params) => `
Take the following information and return a string of valid JSON data of this data with the key and value listed:
${params.ExtendedAttributes.FaceAttributes}

ONLY RETURN JSON DATA WITH OF A SINGLE DEPTH, no introduction, keys should use underscores rather than spaces.
MUST BE VALID JSON
`,
});

export const packExtendedIntimate: MetaPromptType = createMetaPrompt({
  name: "JSON_EXTENDED_INTIMATE",
  model: "NOUS_HERMES",
  content: (params) => `
Take the following information and return a string of valid JSON data of this data with the key and value listed:
${params.ExtendedAttributes.IntimateAttributes}

ONLY RETURN JSON DATA WITH OF A SINGLE DEPTH, no introduction, keys should use underscores rather than spaces.
MUST BE VALID JSON
`,
});

export const packExtendedEyes: MetaPromptType = createMetaPrompt({
  name: "JSON_EXTENDED_EYES",
  model: "NOUS_HERMES",
  content: (params) => `
Take the following information and return a string of valid JSON data of this data with the key and value listed:
${params.ExtendedAttributes.EyesAttributes}

ONLY RETURN JSON DATA WITH OF A SINGLE DEPTH, no introduction, keys should use underscores rather than spaces.
MUST BE VALID JSON
`,
});