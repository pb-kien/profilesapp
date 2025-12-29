import { defineFunction } from '@aws-amplify/backend';
export const postConfirmation = defineFunction({
    name: 'post-confirmation',
});
import type { PostConfirmationTriggerHandler } from "aws-lambda";
export const handler: PostConfirmationTriggerHandler = async (event) => {
    return event;
};
