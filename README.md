## Expense Tracker

This app is a simple email-based expense tracker built with **Next.js** and
**Shadcn UI** components. Paste any email text and the application will call
OpenAI's **GPT-4o** model to determine whether it describes a potential
business expense.

### Running locally

1. Install dependencies with `npm install`.
2. Set an `OPENAI_API_KEY` environment variable with your OpenAI key.
3. Start the development server with `npm run dev`.

After pasting an email and clicking **Check**, the result will be added to the
list of tagged emails on the page.
