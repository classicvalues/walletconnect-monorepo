import { SequenceTypes, ISequence } from "./sequence";
import { AppMetadata, SignalTypes } from "./misc";

export declare namespace PairingTypes {
  export type Status = SequenceTypes.Status;

  export type JsonRpc = SequenceTypes.JsonRpc;

  export type Events = SequenceTypes.Events;

  export type Config = SequenceTypes.Config<Events, JsonRpc, Status>;

  export type Relay = SequenceTypes.Relay;

  export type BasePermissions = SequenceTypes.BasePermissions;

  export type ProposedPermissions = SequenceTypes.ProposedPermissions;

  export type SettledPermissions = SequenceTypes.SettledPermissions;

  export type Permissions = SequenceTypes.Permissions;

  export type ProposeParams = SequenceTypes.ProposeParams;

  export type CreateParams = SequenceTypes.CreateParams;

  // URI method is specific to Pairing
  export type Signal = SignalTypes.Uri;

  export type Participant = SequenceTypes.Participant;

  export type ProposedPeer = SequenceTypes.ProposedPeer;

  export type Proposal = SequenceTypes.Proposal<Signal>;

  export type ProposedStatus = SequenceTypes.ProposedStatus;

  export type RespondedStatus = SequenceTypes.RespondedStatus;

  export type PendingStatus = SequenceTypes.PendingStatus;

  export type BasePending = SequenceTypes.BasePending<Proposal>;

  export type ProposedPending = SequenceTypes.ProposedPending<Participant, Proposal>;

  export type RespondedPending = SequenceTypes.RespondedPending<Participant, Proposal, State>;

  export type Pending = SequenceTypes.Pending;

  export type RespondParams = SequenceTypes.RespondParams;

  export type SettleParams = SequenceTypes.SettleParams;

  export type UpgradeParams = SequenceTypes.UpgradeParams;

  export type UpdateParams = SequenceTypes.UpdateParams;

  export type RequestParams = SequenceTypes.RequestParams;

  export type Upgrade = SequenceTypes.Upgrade;

  export type Update = SequenceTypes.Update;

  export type Request = SequenceTypes.Request;

  export type PayloadEvent = SequenceTypes.PayloadEvent;

  export type RequestEvent = SequenceTypes.RequestEvent;

  export type ResponseEvent = SequenceTypes.ResponseEvent;

  export type DeleteParams = SequenceTypes.DeleteParams;

  export type Settled = SequenceTypes.Settled;

  export type Created = SequenceTypes.Created;

  export type Success = SequenceTypes.Success;

  export type Failed = SequenceTypes.Failed;

  export type Outcome = SequenceTypes.Outcome;

  export interface State {
    metadata?: AppMetadata;
  }

  export type DefaultSignalParams = SequenceTypes.DefaultSignalParams<ProposedPeer>;

  export type Notification = SequenceTypes.Notification;

  export type NotificationEvent = SequenceTypes.NotificationEvent;

  export type NotifyParams = SequenceTypes.NotifyParams;
}

export abstract class IPairing extends ISequence<
  PairingTypes.Config,
  PairingTypes.Pending,
  PairingTypes.Settled,
  PairingTypes.Upgrade,
  PairingTypes.Update,
  PairingTypes.State,
  PairingTypes.Permissions,
  PairingTypes.CreateParams,
  PairingTypes.RespondParams,
  PairingTypes.RequestParams,
  PairingTypes.UpgradeParams,
  PairingTypes.UpdateParams,
  PairingTypes.DeleteParams,
  PairingTypes.ProposeParams,
  PairingTypes.SettleParams,
  PairingTypes.NotifyParams,
  PairingTypes.Participant,
  PairingTypes.Signal,
  PairingTypes.DefaultSignalParams,
  PairingTypes.ProposedPermissions
> {}
