<h1 align="center">Contributing to Events | Projects | Programs</h1>

1. Set up your local environment as mentioned [here](https://github.com/Opentek-Org/opentek/blob/main/README.md#%EF%B8%8F-installation-steps)
2. Open the `event.js` file and in the `data` variable you can see `monthId` and inside it we have `event` where we add our event for that particular month
Our month convention is **0 - January** to **11 - December**

In the picture below we have an event of **January** and the **event** number is 1
[![readme.png](https://i.postimg.cc/Gp8Ypgq4/readme.png)](https://postimg.cc/1gS4CBxS)

According to the above pattern we have to add other events. 

**All the images works good in (1000 * 1000) pixels and store it in ../images/events folder only**

3. If you want to add an event that will be occuring in March then go to `monthId - 2` and create a block as shown and fill all the necessary details.

We will be reviewing each and every PR before it gets merged.

## 💯 Adding of PROJECTS and PROGRAMS work the same way!

**If you want to add a domain you can add it inside `domain` array and make necessary changes in `data`**

*************************************************************************

<h1 align="center">Contributing to Tutorials</h1>

We know there are 100's of tutorials out there but we do not want any **spam** here. Only put of those which you genuinely found useful and would recommend others to watch. 

1. Open the `tutorial.js` file and you can see the pattern

[![tuts.png](https://i.postimg.cc/q7rqfkzM/tuts.png)](https://postimg.cc/k2jqKPQk)

2. The `id` is coming from Youtube. Here is how you can get it:
- Open the Youtube video you want to add.
- The highlighted part is your `id` that we are going to use.
- Copy the id and paste it. Add the necessary details like author, desc and about.

[![yt.png](https://i.postimg.cc/nr92yKPm/yt.png)](https://postimg.cc/y3B09RB6)

### Commit Message Guidelines using Commitlint

We follow a standardized commit message format using Commitlint to ensure consistency and clarity in our commit history. Each commit message should adhere to the following guidelines:

1. **Type**: The commit type must be one of the following:

   - `feat`: A new feature or enhancement.
   - `fix`: A bug fix.
   - `docs`: Documentation changes.
   - `style`: Code style changes (e.g., formatting, semicolons).
   - `refactor`: Code refactorings with no feature changes or bug fixes.
   - `test`: Adding or improving tests.
   - `chore`: General maintenance tasks, build changes, etc.

2. **Scope** (Optional): The scope provides context for the commit, indicating the specific part of the project being affected. Use a short description in lowercase (e.g., `auth`, `navbar`, `README`).

3. **Description**: A brief and meaningful description of the changes made. Start with a capital letter and use the imperative mood (e.g., "Add new feature" instead of "Added new feature").

4. **Issue reference** (Optional): Include the issue number associated with the commit (e.g., `#123`).

### Examples:

#### Valid Commit Messages:

- `feat: Add user authentication feature`
- `fix(auth): Resolve login page redirect issue`
- `docs: Update installation instructions`
- `style: Format code according to project guidelines`
- `refactor(navbar): Improve responsiveness`
- `test: Add unit tests for API endpoints`
- `chore: Update dependencies to latest versions`
- `fix: Handle edge case in data processing (#456)`

#### Invalid Commit Messages:

- `Added new stuff`
- `Fixed a bug`
- `Updated code`
- `auth feature update`
- `chore: fixed some stuff`

### Commit Example with Commitlint:

```bash
git commit -m "feat(auth): Implement user signup process (#789)"
```



<p align="center">🌟 Voila, you can now contribute and can make a difference!! </p>