import { describe, expect, it } from "@jest/globals";
import type { PortableTextBlock } from "@portabletext/types";
import {
  defineArrayMember as defineArrayMemberNative,
  defineConfig as defineConfigNative,
  defineField as defineFieldNative,
  defineType as defineTypeNative,
} from "sanity";
import type {
  GeopointValue,
  ImageCrop,
  ImageHotspot,
  Reference,
  SlugValue,
} from "sanity";

import { expectType } from "@sanity-typed/test-utils";

import { defineArrayMember, defineConfig, defineField, defineType } from ".";
import type {
  AliasValue,
  Config,
  CrossDatasetReferenceValue,
  FileValue,
  ImageValue,
  InferSchemaValues,
  _InferValue,
} from ".";

describe("defineArrayMember", () => {
  describe("block", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "block",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "block",
        })
      ));

    it("infers PortableTextBlock", () => {
      const arrayMember = defineArrayMember({
        type: "block",
      });

      expectType<
        _InferValue<typeof arrayMember>
      >().toStrictEqual<PortableTextBlock>();
    });
  });

  describe("boolean", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "boolean",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "boolean",
        })
      ));

    it("infers boolean", () => {
      const arrayMember = defineArrayMember({
        type: "boolean",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<boolean>();
    });
  });

  describe("crossDatasetReference", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "crossDatasetReference",
          to: [],
          dataset: "foo",
          projectId: "bar",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "crossDatasetReference",
          to: [],
          dataset: "foo",
          projectId: "bar",
        })
      ));

    it("infers CrossDatasetReferenceValue", () => {
      const arrayMember = defineArrayMember({
        type: "crossDatasetReference",
        to: [],
        dataset: "foo",
        projectId: "bar",
      });

      expectType<
        _InferValue<typeof arrayMember>
      >().toStrictEqual<CrossDatasetReferenceValue>();
    });
  });

  describe("date", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "date",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "date",
        })
      ));

    it("infers string", () => {
      const arrayMember = defineArrayMember({
        type: "date",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<string>();
    });
  });

  describe("datetime", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "datetime",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "datetime",
        })
      ));

    it("infers string", () => {
      const arrayMember = defineArrayMember({
        type: "datetime",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<string>();
    });
  });

  describe("email", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "email",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "email",
        })
      ));

    it("infers string", () => {
      const arrayMember = defineArrayMember({
        type: "email",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<string>();
    });
  });

  describe("file", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "file",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "file",
        })
      ));

    it("infers FileValue", () => {
      const arrayMember = defineArrayMember({
        type: "file",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<FileValue>();
    });

    it("infers FileValue with fields", () => {
      const arrayMember = defineArrayMember({
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        asset?: Reference;
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within files", () => {
      const arrayMember = defineArrayMember({
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        asset?: Reference;
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const arrayMember = defineArrayMember({
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        asset?: Reference;
        bar: boolean;
      }>();
    });
  });

  describe("geopoint", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "geopoint",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "geopoint",
        })
      ));

    it("infers GeopointValue", () => {
      const arrayMember = defineArrayMember({
        type: "geopoint",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<
        Omit<GeopointValue, "_type">
      >();
    });
  });

  describe("image", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "image",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "image",
        })
      ));

    it("infers ImageValue", () => {
      const arrayMember = defineArrayMember({
        type: "image",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<ImageValue>();
    });

    it("infers ImageValue with fields", () => {
      const arrayMember = defineArrayMember({
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        asset?: Reference;
        bar?: boolean;
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
        tar?: number;
      }>();
    });

    it("infers objects within images", () => {
      const arrayMember = defineArrayMember({
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        asset?: Reference;
        bar?: {
          tar?: number;
        };
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
      }>();
    });

    it("infers required fields", () => {
      const arrayMember = defineArrayMember({
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        asset?: Reference;
        bar: boolean;
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
      }>();
    });
  });

  describe("number", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "number",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "number",
        })
      ));

    it("infers number", () => {
      const arrayMember = defineArrayMember({
        type: "number",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<number>();
    });
  });

  describe("object", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "object",
          fields: [
            defineFieldNative({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ));

    it("infers object with fields", () => {
      const arrayMember = defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within objects", () => {
      const arrayMember = defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const arrayMember = defineArrayMember({
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<{
        bar: boolean;
      }>();
    });
  });

  describe("reference", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "reference",
          to: [],
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "reference",
          to: [],
        })
      ));

    it("infers Reference", () => {
      const arrayMember = defineArrayMember({
        type: "reference",
        to: [],
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<
        Omit<Reference, "_type">
      >();
    });
  });

  describe("slug", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "slug",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "slug",
        })
      ));

    it("infers SlugValue", () => {
      const arrayMember = defineArrayMember({
        type: "slug",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<
        Omit<SlugValue, "_type">
      >();
    });
  });

  describe("string", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "string",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "string",
        })
      ));

    it("infers string", () => {
      const arrayMember = defineArrayMember({
        type: "string",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<string>();
    });
  });

  describe("text", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "text",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "text",
        })
      ));

    it("infers string", () => {
      const arrayMember = defineArrayMember({
        type: "text",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<string>();
    });
  });

  describe("url", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "url",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "url",
        })
      ));

    it("infers string", () => {
      const arrayMember = defineArrayMember({
        type: "url",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<string>();
    });
  });

  describe("<alias>", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineArrayMember({
          type: "named",
        })
      ).toStrictEqual(
        defineArrayMemberNative({
          type: "named",
        })
      ));

    it("infers AliasValue", () => {
      const arrayMember = defineArrayMember({
        type: "named",
      });

      expectType<_InferValue<typeof arrayMember>>().toStrictEqual<
        AliasValue<"named">
      >();
    });
  });
});

describe("defineField", () => {
  describe("array", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "array",
          of: [defineArrayMember({ type: "boolean" })],
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "array",
          of: [defineArrayMemberNative({ type: "boolean" })],
        })
      ));

    it("infers array of the member", () => {
      const field = defineField({
        name: "foo",
        type: "array",
        of: [defineArrayMember({ type: "boolean" })],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<boolean[]>();
    });

    it("infers unions if there are multiple members", () => {
      const field = defineField({
        name: "foo",
        type: "array",
        of: [
          defineArrayMember({ type: "boolean" }),
          defineArrayMember({ type: "string" }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<
        (boolean | string)[]
      >();
    });

    it('adds "_key" to objects', () => {
      const field = defineField({
        name: "foo",
        type: "array",
        of: [
          defineArrayMember({
            type: "object",
            fields: [
              defineField({
                name: "bar",
                type: "boolean",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<
        {
          _key: string;
          bar?: boolean;
        }[]
      >();
    });
  });

  describe("block", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "block",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "block",
        })
      ));

    it("infers PortableTextBlock", () => {
      const field = defineField({
        name: "foo",
        type: "block",
      });

      expectType<
        _InferValue<typeof field>
      >().toStrictEqual<PortableTextBlock>();
    });
  });

  describe("boolean", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "boolean",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "boolean",
        })
      ));

    it("infers boolean", () => {
      const field = defineField({
        name: "foo",
        type: "boolean",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<boolean>();
    });
  });

  describe("crossDatasetReference", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "crossDatasetReference",
          to: [],
          dataset: "foo",
          projectId: "bar",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "crossDatasetReference",
          to: [],
          dataset: "foo",
          projectId: "bar",
        })
      ));

    it("infers CrossDatasetReferenceValue", () => {
      const field = defineField({
        name: "foo",
        type: "crossDatasetReference",
        to: [],
        dataset: "foo",
        projectId: "bar",
      });

      expectType<
        _InferValue<typeof field>
      >().toStrictEqual<CrossDatasetReferenceValue>();
    });
  });

  describe("date", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "date",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "date",
        })
      ));

    it("infers string", () => {
      const field = defineField({
        name: "foo",
        type: "date",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<string>();
    });
  });

  describe("datetime", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "datetime",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "datetime",
        })
      ));

    it("infers string", () => {
      const field = defineField({
        name: "foo",
        type: "datetime",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<string>();
    });
  });

  describe("document", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "document",
          fields: [
            defineField({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "document",
          fields: [
            defineFieldNative({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ));

    it("infers SanityDocument with fields", () => {
      const field = defineField({
        name: "foo",
        type: "document",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        _createdAt: string;
        _id: string;
        _rev: string;
        _type: "foo";
        _updatedAt: string;
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within documents", () => {
      const field = defineField({
        name: "foo",
        type: "document",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        _createdAt: string;
        _id: string;
        _rev: string;
        _type: "foo";
        _updatedAt: string;
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const field = defineField({
        name: "foo",
        type: "document",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        _createdAt: string;
        _id: string;
        _rev: string;
        _type: "foo";
        _updatedAt: string;
        bar: boolean;
      }>();
    });
  });

  describe("email", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "email",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "email",
        })
      ));

    it("infers string", () => {
      const field = defineField({
        name: "foo",
        type: "email",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<string>();
    });
  });

  describe("file", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "file",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "file",
        })
      ));

    it("infers FileValue", () => {
      const field = defineField({
        name: "foo",
        type: "file",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<FileValue>();
    });

    it("infers FileValue with fields", () => {
      const field = defineField({
        name: "foo",
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        asset?: Reference;
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within files", () => {
      const field = defineField({
        name: "foo",
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        asset?: Reference;
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const field = defineField({
        name: "foo",
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        asset?: Reference;
        bar: boolean;
      }>();
    });
  });

  describe("geopoint", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "geopoint",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "geopoint",
        })
      ));

    it("infers GeopointValue", () => {
      const field = defineField({
        name: "foo",
        type: "geopoint",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<
        Omit<GeopointValue, "_type">
      >();
    });
  });

  describe("image", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "image",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "image",
        })
      ));

    it("infers ImageValue", () => {
      const field = defineField({
        name: "foo",
        type: "image",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<ImageValue>();
    });

    it("infers ImageValue with fields", () => {
      const field = defineField({
        name: "foo",
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        asset?: Reference;
        bar?: boolean;
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
        tar?: number;
      }>();
    });

    it("infers objects within images", () => {
      const field = defineField({
        name: "foo",
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        asset?: Reference;
        bar?: {
          tar?: number;
        };
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
      }>();
    });

    it("infers required fields", () => {
      const field = defineField({
        name: "foo",
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        asset?: Reference;
        bar: boolean;
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
      }>();
    });
  });

  describe("number", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "number",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "number",
        })
      ));

    it("infers number", () => {
      const field = defineField({
        name: "foo",
        type: "number",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<number>();
    });
  });

  describe("object", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "object",
          fields: [
            defineField({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "object",
          fields: [
            defineFieldNative({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ));

    it("infers object with fields", () => {
      const field = defineField({
        name: "foo",
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within objects", () => {
      const field = defineField({
        name: "foo",
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const field = defineField({
        name: "foo",
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<{
        bar: boolean;
      }>();
    });
  });

  describe("reference", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "reference",
          to: [],
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "reference",
          to: [],
        })
      ));

    it("infers Reference", () => {
      const field = defineField({
        name: "foo",
        type: "reference",
        to: [],
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<
        Omit<Reference, "_type">
      >();
    });
  });

  describe("slug", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "slug",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "slug",
        })
      ));

    it("infers SlugValue", () => {
      const field = defineField({
        name: "foo",
        type: "slug",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<
        Omit<SlugValue, "_type">
      >();
    });
  });

  describe("string", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "string",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "string",
        })
      ));

    it("infers string", () => {
      const field = defineField({
        name: "foo",
        type: "string",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<string>();
    });
  });

  describe("text", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "text",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "text",
        })
      ));

    it("infers string", () => {
      const field = defineField({
        name: "foo",
        type: "text",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<string>();
    });
  });

  describe("url", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "url",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "url",
        })
      ));

    it("infers string", () => {
      const field = defineField({
        name: "foo",
        type: "url",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<string>();
    });
  });

  describe("<alias>", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineField({
          name: "foo",
          type: "named",
        })
      ).toStrictEqual(
        defineFieldNative({
          name: "foo",
          type: "named",
        })
      ));

    it("infers AliasValue", () => {
      const field = defineField({
        name: "foo",
        type: "named",
      });

      expectType<_InferValue<typeof field>>().toStrictEqual<
        AliasValue<"named">
      >();
    });
  });
});

describe("defineType", () => {
  describe("array", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "array",
          of: [defineArrayMember({ type: "boolean" })],
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "array",
          of: [defineArrayMemberNative({ type: "boolean" })],
        })
      ));

    it("infers array of the member", () => {
      const type = defineType({
        name: "foo",
        type: "array",
        of: [defineArrayMember({ type: "boolean" })],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<boolean[]>();
    });

    it("infers unions if there are multiple members", () => {
      const type = defineType({
        name: "foo",
        type: "array",
        of: [
          defineArrayMember({ type: "boolean" }),
          defineArrayMember({ type: "string" }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<
        (boolean | string)[]
      >();
    });
  });

  describe("block", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "block",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "block",
        })
      ));

    it("infers PortableTextBlock", () => {
      const type = defineType({
        name: "foo",
        type: "block",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<PortableTextBlock>();
    });
  });

  describe("boolean", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "boolean",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "boolean",
        })
      ));

    it("infers boolean", () => {
      const type = defineType({
        name: "foo",
        type: "boolean",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<boolean>();
    });
  });

  describe("crossDatasetReference", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "crossDatasetReference",
          to: [],
          dataset: "foo",
          projectId: "bar",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "crossDatasetReference",
          to: [],
          dataset: "foo",
          projectId: "bar",
        })
      ));

    it("infers CrossDatasetReferenceValue", () => {
      const type = defineType({
        name: "foo",
        type: "crossDatasetReference",
        to: [],
        dataset: "foo",
        projectId: "bar",
      });

      expectType<
        _InferValue<typeof type>
      >().toStrictEqual<CrossDatasetReferenceValue>();
    });
  });

  describe("date", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "date",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "date",
        })
      ));

    it("infers string", () => {
      const type = defineType({
        name: "foo",
        type: "date",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<string>();
    });
  });

  describe("datetime", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "datetime",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "datetime",
        })
      ));

    it("infers string", () => {
      const type = defineType({
        name: "foo",
        type: "datetime",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<string>();
    });
  });

  describe("document", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "document",
          fields: [
            defineField({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "document",
          fields: [
            defineFieldNative({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ));

    it("infers SanityDocument with fields", () => {
      const type = defineType({
        name: "foo",
        type: "document",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        _createdAt: string;
        _id: string;
        _rev: string;
        _type: "foo";
        _updatedAt: string;
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within documents", () => {
      const type = defineType({
        name: "foo",
        type: "document",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        _createdAt: string;
        _id: string;
        _rev: string;
        _type: "foo";
        _updatedAt: string;
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const type = defineType({
        name: "foo",
        type: "document",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        _createdAt: string;
        _id: string;
        _rev: string;
        _type: "foo";
        _updatedAt: string;
        bar: boolean;
      }>();
    });
  });

  describe("email", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "email",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "email",
        })
      ));

    it("infers string", () => {
      const type = defineType({
        name: "foo",
        type: "email",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<string>();
    });
  });

  describe("file", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "file",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "file",
        })
      ));

    it("infers FileValue", () => {
      const type = defineType({
        name: "foo",
        type: "file",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<FileValue>();
    });

    it("infers FileValue with fields", () => {
      const type = defineType({
        name: "foo",
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        asset?: Reference;
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within files", () => {
      const type = defineType({
        name: "foo",
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        asset?: Reference;
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const type = defineType({
        name: "foo",
        type: "file",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        asset?: Reference;
        bar: boolean;
      }>();
    });
  });

  describe("geopoint", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "geopoint",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "geopoint",
        })
      ));

    it("infers GeopointValue", () => {
      const type = defineType({
        name: "foo",
        type: "geopoint",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<
        Omit<GeopointValue, "_type">
      >();
    });
  });

  describe("image", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "image",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "image",
        })
      ));

    it("infers ImageValue", () => {
      const type = defineType({
        name: "foo",
        type: "image",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<ImageValue>();
    });

    it("infers ImageValue with fields", () => {
      const type = defineType({
        name: "foo",
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        asset?: Reference;
        bar?: boolean;
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
        tar?: number;
      }>();
    });

    it("infers objects within images", () => {
      const type = defineType({
        name: "foo",
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        asset?: Reference;
        bar?: {
          tar?: number;
        };
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
      }>();
    });

    it("infers required fields", () => {
      const type = defineType({
        name: "foo",
        type: "image",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        asset?: Reference;
        bar: boolean;
        crop?: ImageCrop;
        hotspot?: ImageHotspot;
      }>();
    });
  });

  describe("number", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "number",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "number",
        })
      ));

    it("infers number", () => {
      const type = defineType({
        name: "foo",
        type: "number",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<number>();
    });
  });

  describe("object", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "object",
          fields: [
            defineField({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "object",
          fields: [
            defineFieldNative({
              name: "bar",
              type: "boolean",
            }),
          ],
        })
      ));

    it("infers object with fields", () => {
      const type = defineType({
        name: "foo",
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
          }),
          defineField({
            name: "tar",
            type: "number",
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        bar?: boolean;
        tar?: number;
      }>();
    });

    it("infers objects within objects", () => {
      const type = defineType({
        name: "foo",
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "object",
            fields: [
              defineField({
                name: "tar",
                type: "number",
              }),
            ],
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        bar?: {
          tar?: number;
        };
      }>();
    });

    it("infers required fields", () => {
      const type = defineType({
        name: "foo",
        type: "object",
        fields: [
          defineField({
            name: "bar",
            type: "boolean",
            validation: (rule) => rule.required(),
          }),
        ],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<{
        bar: boolean;
      }>();
    });
  });

  describe("reference", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "reference",
          to: [],
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "reference",
          to: [],
        })
      ));

    it("infers Reference", () => {
      const type = defineType({
        name: "foo",
        type: "reference",
        to: [],
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<
        Omit<Reference, "_type">
      >();
    });
  });

  describe("slug", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "slug",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "slug",
        })
      ));

    it("infers SlugValue", () => {
      const type = defineType({
        name: "foo",
        type: "slug",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<
        Omit<SlugValue, "_type">
      >();
    });
  });

  describe("string", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "string",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "string",
        })
      ));

    it("infers string", () => {
      const type = defineType({
        name: "foo",
        type: "string",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<string>();
    });
  });

  describe("text", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "text",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "text",
        })
      ));

    it("infers string", () => {
      const type = defineType({
        name: "foo",
        type: "text",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<string>();
    });
  });

  describe("url", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "url",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "url",
        })
      ));

    it("infers string", () => {
      const type = defineType({
        name: "foo",
        type: "url",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<string>();
    });
  });

  describe("<alias>", () => {
    it("returns the same object as sanity", () =>
      expect(
        defineType({
          name: "foo",
          type: "named",
        })
      ).toStrictEqual(
        defineTypeNative({
          name: "foo",
          type: "named",
        })
      ));

    it("infers AliasValue", () => {
      const type = defineType({
        name: "foo",
        type: "named",
      });

      expectType<_InferValue<typeof type>>().toStrictEqual<
        AliasValue<"named">
      >();
    });
  });
});

describe("defineConfig", () => {
  it("returns the same object as sanity", () =>
    expect(
      defineConfig({
        dataset: "dataset",
        projectId: "projectId",
      })
    ).toStrictEqual(
      defineConfigNative({
        dataset: "dataset",
        projectId: "projectId",
      })
    ));

  it("accepts types", () => {
    const type = defineType({
      name: "foo",
      type: "document",
      fields: [
        defineField({
          name: "bar",
          type: "boolean",
        }),
      ],
    });

    const config = defineConfig({
      dataset: "dataset",
      projectId: "projectId",
      schema: {
        types: [type],
      },
    });

    expectType<typeof config>().toStrictEqual<Config<typeof type>>();
  });

  it("infers type value", () => {
    const config = defineConfig({
      dataset: "dataset",
      projectId: "projectId",
      schema: {
        types: [
          defineType({
            name: "foo",
            type: "document",
            fields: [
              defineField({
                name: "bar",
                type: "boolean",
              }),
            ],
          }),
        ],
      },
    });

    expectType<InferSchemaValues<typeof config>>().toStrictEqual<{
      _createdAt: string;
      _id: string;
      _rev: string;
      _type: "foo";
      _updatedAt: string;
      bar?: boolean;
    }>();
  });

  it("infers aliased type value", () => {
    const config = defineConfig({
      dataset: "dataset",
      projectId: "projectId",
      schema: {
        types: [
          defineType({
            name: "foo",
            type: "document",
            fields: [
              defineField({
                name: "bar",
                type: "bar",
              }),
            ],
          }),
          defineType({
            name: "bar",
            type: "document",
            fields: [
              defineField({
                name: "baz",
                type: "boolean",
              }),
            ],
          }),
        ],
      },
    });

    expectType<InferSchemaValues<typeof config>>().toStrictEqual<
      | {
          _createdAt: string;
          _id: string;
          _rev: string;
          _type: "bar";
          _updatedAt: string;
          baz?: boolean;
        }
      | {
          _createdAt: string;
          _id: string;
          _rev: string;
          _type: "foo";
          _updatedAt: string;
          bar?: {
            _createdAt: string;
            _id: string;
            _rev: string;
            _type: "bar";
            _updatedAt: string;
            baz?: boolean;
          };
        }
    >();
  });

  it("infers cyclical type value", () => {
    const config = defineConfig({
      dataset: "dataset",
      projectId: "projectId",
      schema: {
        types: [
          defineType({
            name: "foo",
            type: "document",
            fields: [
              defineField({
                name: "foo",
                type: "foo",
                validation: (Rule) => Rule.required(),
              }),
            ],
          }),
        ],
      },
    });

    type Foo = {
      _createdAt: string;
      _id: string;
      _rev: string;
      _type: "foo";
      _updatedAt: string;
      // Cycle!
      foo: Foo;
    };

    expectType<InferSchemaValues<typeof config>>().toStrictEqual<Foo>();

    // It really is cyclical!
    expectType<InferSchemaValues<typeof config>["foo"]>().toStrictEqual<
      InferSchemaValues<typeof config>
    >();
  });

  it("infers multiple step cyclical type value", () => {
    const config = defineConfig({
      dataset: "dataset",
      projectId: "projectId",
      schema: {
        types: [
          defineType({
            name: "foo",
            type: "document",
            fields: [
              defineField({
                name: "bar",
                type: "bar",
                validation: (Rule) => Rule.required(),
              }),
            ],
          }),
          defineType({
            name: "bar",
            type: "document",
            fields: [
              defineField({
                name: "baz",
                type: "baz",
                validation: (Rule) => Rule.required(),
              }),
            ],
          }),
          defineType({
            name: "baz",
            type: "document",
            fields: [
              defineField({
                name: "foo",
                type: "foo",
                validation: (Rule) => Rule.required(),
              }),
            ],
          }),
        ],
      },
    });

    type Foo = {
      _createdAt: string;
      _id: string;
      _rev: string;
      _type: "foo";
      _updatedAt: string;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define -- Recursive type
      bar: Bar;
    };

    type Bar = {
      _createdAt: string;
      _id: string;
      _rev: string;
      _type: "bar";
      _updatedAt: string;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define -- Recursive type
      baz: Baz;
    };

    type Baz = {
      _createdAt: string;
      _id: string;
      _rev: string;
      _type: "baz";
      _updatedAt: string;
      foo: Foo;
    };

    expectType<InferSchemaValues<typeof config>>().toStrictEqual<
      Bar | Baz | Foo
    >();

    // It really is cyclical!
    expectType<
      Extract<
        InferSchemaValues<typeof config>,
        { _type: "foo" }
      >["bar"]["baz"]["foo"]
    >().toStrictEqual<
      Extract<InferSchemaValues<typeof config>, { _type: "foo" }>
    >();
  });
});
