import React from "react";

// A compact Python fundamentals reference rendered as a React component.
// This is JSX/JavaScript containing Python examples as display text; it is not
// executable Python. Save as basics.jsx in a React project.

const lessons = [
  {
    title: "1. Output, comments, and variables",
    explanation: "Python runs statements in order. Names are conventionally written in snake_case.",
    code: `# A comment starts with #\nname = "Ada"\nage = 36\nprint(name, age)`,
  },
  {
    title: "2. Basic data types",
    explanation: "Common built-in types include integers, floats, strings, booleans, and None.",
    code: `count = 7          # int\nprice = 2.5        # float\nmessage = "Hello"  # str\nactive = True      # bool\nresult = None      # NoneType\nprint(type(count))`,
  },
  {
    title: "3. Operators and conversions",
    explanation: "Use == to compare values, and convert between types explicitly when needed.",
    code: `a, b = 10, 3\nprint(a + b, a - b, a * b)\nprint(a / b, a // b, a % b, a ** b)\nprint(a == b, a > b, a != b)\nnumber = int("42")\nprint(str(number), float(number))`,
  },
  {
    title: "4. Strings",
    explanation: "Strings are immutable. Indexing starts at zero; slices use an exclusive end.",
    code: `name = "Grace Hopper"\nprint(name[0], name[-1], name[0:5])\nprint(name.lower(), name.upper())\nprint("red,green".split(","))\nprint(f"Hello, {name}!")`,
  },
  {
    title: "5. Collections",
    explanation: "Lists are mutable sequences, tuples are immutable sequences, sets hold unique values, and dictionaries map keys to values.",
    code: `items = ["pen", "book"]\nitems.append("lamp")\npoint = (4, 9)\nunique = {1, 2, 2, 3}\nperson = {"name": "Ada", "age": 36}\nprint(items, point, unique, person.get("name"))`,
  },
  {
    title: "6. Conditions",
    explanation: "Indentation defines blocks. Use if, elif, and else for branching.",
    code: `score = 82\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelse:\n    grade = "Keep practicing"\nprint(grade)`,
  },
  {
    title: "7. Loops and comprehensions",
    explanation: "Use for to iterate over items and while to repeat while a condition is true.",
    code: `for index, item in enumerate(["a", "b"], start=1):\n    print(index, item)\n\nfor number in range(3):\n    print(number)\n\nsquares = [n * n for n in range(6)]\nprint(squares)`,
  },
  {
    title: "8. Functions",
    explanation: "Functions package reusable logic. Parameters can have defaults, and return sends a result back.",
    code: `def greet(name="friend"):\n    return f"Hello, {name}!"\n\ndef total(*numbers):\n    return sum(numbers)\n\nprint(greet("Lin"), total(1, 2, 3))`,
  },
  {
    title: "9. Modules and imports",
    explanation: "Import modules from Python's standard library or installed packages to reuse functionality.",
    code: `import math\nfrom pathlib import Path\nprint(math.sqrt(81))\nprint(Path("notes.txt").suffix)\n\n# Script entry-point pattern:\n# if __name__ == "__main__":\n#     main()`,
  },
  {
    title: "10. Exceptions",
    explanation: "Handle expected failures with try/except and raise clear errors for invalid input.",
    code: `try:\n    value = int("123")\nexcept ValueError as error:\n    print("Invalid number:", error)\nelse:\n    print(value)\n\n# raise ValueError("Explain the invalid input")`,
  },
  {
    title: "11. Files and JSON",
    explanation: "The with statement manages resources such as files. JSON is useful for structured text data.",
    code: `from pathlib import Path\nimport json\n\npath = Path("example.txt")\npath.write_text("Hello!", encoding="utf-8")\nprint(path.read_text(encoding="utf-8"))\ndata = {"language": "Python", "year": 1991}\ntext = json.dumps(data)\nprint(json.loads(text))`,
  },
  {
    title: "12. Classes and objects",
    explanation: "Classes define object data and behavior. self refers to the current instance.",
    code: `class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return f"{self.name} says woof"\n\nprint(Dog("Rex").speak())`,
  },
  {
    title: "13. Iterators and generators",
    explanation: "Generators yield values one at a time, which can be memory-efficient for sequences.",
    code: `def count_up_to(limit):\n    number = 1\n    while number <= limit:\n        yield number\n        number += 1\n\nprint(list(count_up_to(4)))`,
  },
  {
    title: "14. Useful built-ins and good habits",
    explanation: "Use built-ins like len, sum, min, max, sorted, any, and all. Prefer readable, tested code.",
    code: `values = [4, 1, 7, 2]\nprint(len(values), sum(values), sorted(values))\nprint(min(values), max(values))\nprint(any(value > 5 for value in values))\n\n# Use == for equality; use ` + "`is None`" + ` to check for None.\n# Keep secrets out of source code and avoid eval() on untrusted input.`,
  },
];

export default function PythonBasics() {
  return (
    <main className="python-basics">
      <header>
        <h1>Python Programming Basics</h1>
        <p>
          A beginner-friendly reference to core Python concepts. The examples
          shown here are Python code snippets; run them in a Python 3
          interpreter or notebook.
        </p>
      </header>
      {lessons.map(({ title, explanation, code }) => (
        <section key={title} aria-labelledby={title}>
          <h2>{title}</h2>
          <p>{explanation}</p>
          <pre>
            <code>{code}</code>
          </pre>
        </section>
      ))}
      <footer>
        <h2>Practice ideas</h2>
        <ul>
          <li>Write a function that converts temperatures between Celsius and Fahrenheit.</li>
          <li>Count word frequencies in a text file.</li>
          <li>Create a small contact book using a dictionary and JSON.</li>
          <li>Build a class and write simple tests for its behavior.</li>
        </ul>
        <p>
          Python is a broad language and ecosystem; consult the official Python
          tutorial and standard-library documentation for deeper study.
        </p>
      </footer>
    </main>
  );
}
