# Ashesi Data Repository Frontend

This is the frontend for the Ashesi Data Repository Project. It is a **Next.js** application that utilizes the **App Router** and is styled using **Tailwind CSS**.

## Features

## Project Structure

The typical directory structure should contain the following files where necessary

```
app/
 ├── directory/           # A route
 │    ├── page.js         # The main page (server component)
 │    ├── loading.js      # Skeleton loader
 │    ├── error.js        # Custom error page (if fetching fails)
 │    ├── layout.js       # Shared layout for sub-routes
 │    ├── template.js     # Forces re-render on navigation
 │    ├── utils/          # Helper functions (optional)
```

## Fonts, Colors, Icons

-   The primary font for the project is **Montserrat**. Use like this

```html
<h1 className="font-montserrat text-2xl">Hello, Montserrat!</h1>
```

-   The red Ashesi color has been saved as a custom color in the `tailwind.config.js` file. The color is named `ashesi-red` and has the value `#AA3C3F`.

-   Icons are from the **Lucide** icon library.
