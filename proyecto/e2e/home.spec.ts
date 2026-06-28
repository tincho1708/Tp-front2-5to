import { test, expect } from "@playwright/test";

test("la página principal carga correctamente", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/./);
  await expect(page.locator("body")).toBeVisible();
});

test("el navbar está visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("nav")).toBeVisible();
});

test("la página de login carga", async ({ page }) => {
  await page.goto("/login");
  await expect(page.locator("body")).toBeVisible();
});
