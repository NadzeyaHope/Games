/**
 * Import zod library
 */
import { z } from 'zod';

/**
 * Define our User model using zod
 */
const User = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    githubId: z.string().optional(),
});
const invalidUser = {
    id: 9,
    email: 'example@mail.com',
}

const parsedUser = User.parse(invalidUser)