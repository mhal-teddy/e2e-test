import { test, expect } from '@playwright/test';

test('can post', async ({page}) => {
    await page.goto('https://jam0824.github.io/finding_bugs/');

    const inputText: string = 'first feeling';
    await page.getByPlaceholder('今どんな気持ち？').fill(inputText);
    await page.getByRole('button', { name: '投稿' }).click();
    const postedText = await page.getByText(inputText).first()
    await expect(postedText).toHaveText(inputText);
});
