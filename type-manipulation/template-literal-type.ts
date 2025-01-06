/**
 * Taken from https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
 */
type PropEventSource<Type> = {
  on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};

/// Create a "watched object" with an `on` method
/// so that you can watch for changes to properties.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});

person.on('firstNameChanged', () => {});

// Prevent easy human error (using the key instead of the event name). Uncomment and observe TS compile error
// person.on("firstName", () => {});
