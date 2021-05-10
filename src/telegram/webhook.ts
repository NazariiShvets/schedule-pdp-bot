import { APIGatewayProxyEvent } from "aws-lambda";
import { TelegramAPI, TelegramBody } from "../api";
import { db, UserController } from "../db";
import {
  Callbacks,
  CreatePairSteps,
  DeletePairSteps,
  UpdatePairSteps,
} from "./types";
import { backToMainMenuButton } from "./keyboards";
import {
  createPairDayHandler,
  createPairStartHandler,
  createPairSubjectHandler,
  createPairTeacherHandler,
  createPairTimeHandler,
  defaultHandler,
  initialHandler,
  mainMenuHandler,
  showPairMenuHandler,
  showPairsChooseDayHandler,
  showPairsSpecificDayHandler,
  showPairsDayHandler,
  showPairsWeekHandler,
  deletePairMenuHandler,
  deletePairTimeHandler,
  deletePairDayHandler,
  updatePairMenuHandler,
  updatePairDayHandler,
  updatePairTimeHandler,
} from "./handlers";
import { deletePairConfirmHandler } from "./handlers/pair/delete/deletePairConfirmHandler";

const webhook = async (event: APIGatewayProxyEvent) => {
  try {
    await db.sync({ force: false });

    if (event.body) {
      const { message, callback_query }: TelegramBody = JSON.parse(event.body);

      if (message) {
        const { chat, from, text } = message;
        const user = await UserController.getUser(from.id);

        if (!user) {
          await initialHandler(chat.id, from);

          return;
        }

        if (text === backToMainMenuButton.text) {
          await UserController.updateUser(from.id, {
            state: { state: Callbacks.mainMenu },
          });

          await mainMenuHandler(from.id);

          return;
        }

        switch (user.state.state) {
          case CreatePairSteps.day: {
            await createPairDayHandler(from.id, user, text);
            break;
          }

          case CreatePairSteps.pair: {
            await createPairTimeHandler(from.id, user, text);
            break;
          }

          case CreatePairSteps.subject: {
            await createPairSubjectHandler(from.id, user, text);
            break;
          }

          case CreatePairSteps.teacher: {
            await createPairTeacherHandler(from.id, user, text);
            break;
          }

          case Callbacks.showScheduleDay: {
            await showPairsSpecificDayHandler(from.id, text);
            break;
          }

          case DeletePairSteps.day: {
            await deletePairDayHandler(from.id, user, text);
            break;
          }

          case DeletePairSteps.pair: {
            await deletePairTimeHandler(from.id, user, text);
            break;
          }

          case UpdatePairSteps.day: {
            await updatePairDayHandler(from.id, user, text);
            break;
          }

          case UpdatePairSteps.pair: {
            await updatePairTimeHandler(from.id, user, text);
            break;
          }

          default: {
            await defaultHandler(from.id);
          }
        }
      }

      if (callback_query) {
        const { from, data } = callback_query;

        const user = await UserController.getUser(from.id);

        if (user) {
          const prevMessage = callback_query.message?.message_id;

          if (prevMessage) {
            await TelegramAPI.deleteMessage(from.id, prevMessage);
          }

          await UserController.updateUser(from.id, {
            state: { state: Callbacks.mainMenu },
          });

          switch (data) {
            case Callbacks.mainMenu: {
              await mainMenuHandler(from.id);
              break;
            }

            case Callbacks.createPair: {
              await createPairStartHandler(from.id, user);

              break;
            }

            case Callbacks.showSchedule: {
              await showPairMenuHandler(from.id);

              break;
            }

            case Callbacks.showScheduleToday: {
              await showPairsDayHandler(from.id);

              break;
            }

            case Callbacks.showScheduleDay: {
              await showPairsChooseDayHandler(from.id);

              break;
            }

            case Callbacks.showScheduleWeek: {
              await showPairsWeekHandler(from.id);

              break;
            }

            case Callbacks.deletePair: {
              await deletePairMenuHandler(from.id);

              break;
            }

            case Callbacks.deletePairConfirm: {
              await deletePairConfirmHandler(from.id, user);

              break;
            }

            case Callbacks.updatePair: {
              await updatePairMenuHandler(from.id);

              break;
            }

            default: {
              await defaultHandler(from.id);
            }
          }

          return;
        }

        await defaultHandler(from.id);
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    // eslint-disable-next-line consistent-return,no-unsafe-finally
    return { statusCode: 200 };
  }
};

export { webhook };
