export const publicRoutes: string[] = [
  "/", 
  "/login", 
  "/register"
];

export const roleRoutes: Record<string, string[]> = {
  freelancer: ["/jobs", "/profile"],
  employer: ["/employer", "/post-job"],
  admin: ["/admin", "/dashboard"],
  supperadmin: ["/supperadmin"],
};
