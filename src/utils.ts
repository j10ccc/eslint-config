import { isPackageExists } from "local-pkg";

type Awaitable<T> = T | Promise<T>;

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m;
  return (resolved as any).default || resolved;
}

export async function ensurePackages(packages: (string | undefined)[]): Promise<void> {
  const nonExistingPackages = packages.filter(i => i && !isPackageExists(i)) as string[];

  if (nonExistingPackages.length !== 0) {
    const message = `${nonExistingPackages.length === 1 ? "Package is" : "Packages are"} required for this config: ${nonExistingPackages.join(", ")}.`;
    throw new Error(message);
  }
}
