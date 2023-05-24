import React from "react"
import renderer from "react-test-renderer"
import { describe, expect, test } from "vitest"
import Clock from "./index"

describe("Clock", () => {
	test("Clock component renders correctly", () => {
		const clock = renderer.create(<Clock />)
		const tree = clock.toJSON()
		expect(tree).toBeTruthy()
	})
})