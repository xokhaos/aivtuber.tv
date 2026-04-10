import { defineConfig } from "eslint/config";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: compat.extends("eslint:recommended"),
    plugins: {
        "@stylistic": stylistic   // ← Add this
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.jquery,
            piecex_common: "readonly",
            grecaptcha: "readonly",
        },

        ecmaVersion: 2021,
        sourceType: "module",
    },

    settings: {},

    rules: {
        
        "block-scoped-var": 2,

        "@stylistic/brace-style": ["error", "allman", {
            allowSingleLine: true,
        }],

        "computed-property-spacing": [2, "never"],
        "no-prototype-builtins": "off",

        indent: [1, 4, {
            SwitchCase: 1,
        }],

        "no-cond-assign": ["error", "except-parens"],
        "max-depth": [1, 8],

        "no-multiple-empty-lines": [1, {
            max: 2,
        }],

        "no-empty": 0,
        "no-useless-escape": 0,
        "no-undef": 2,
        "no-redeclare": 2,
        "no-var": 1,
        "no-extend-native": 2,
        "no-mixed-spaces-and-tabs": 1,
        "no-unused-vars": 1,

        "space-infix-ops": [1, {
            int32Hint: true,
        }],

        "no-use-before-define": [2, "nofunc"],
        semi: [2, "always"],

        "keyword-spacing": [1, {
            before: true,
            after: true,
        }],

        "space-unary-ops": 1,
    },
}]);